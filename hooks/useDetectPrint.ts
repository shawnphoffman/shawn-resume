'use client'

import { useEffect, useState, useRef } from 'react'

interface UseDetectPrintReturn {
	isPrinting: boolean
	setIsPrinting: (isPrinting: boolean) => void
}

function useDetectPrint() {
	// Detect Firefox browser
	const isFirefox =
		typeof window !== 'undefined' && typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('firefox')

	const enableFallback = isFirefox
	const fallbackDebounceMs = 0
	const [isPrinting, setIsPrinting] = useState(false)
	const mountedRef = useRef(true)
	const blurTimerRef = useRef<number | null>(null)

	useEffect(() => {
		mountedRef.current = true
		return () => {
			mountedRef.current = false
		}
	}, [])

	useEffect(() => {
		if (typeof window === 'undefined' || typeof document === 'undefined') return

		const safeSet = (val: boolean) => {
			if (mountedRef.current) setIsPrinting(val)
		}

		const cleanups: Array<() => void> = []

		// --- 1) matchMedia('print') (Chrome, Firefox, Safari) ---
		let mql: MediaQueryList | null = null
		if ('matchMedia' in window) {
			mql = window.matchMedia('print')

			// Initialize from current state
			if (typeof mql.matches === 'boolean') {
				safeSet(mql.matches)
			}

			const onMqlChange = (e: MediaQueryListEvent | MediaQueryList) => {
				// Support both modern (event) and legacy (MediaQueryList) calls
				const matches = 'matches' in e ? (e as MediaQueryListEvent).matches : (e as MediaQueryList).matches
				safeSet(matches)
			}

			// Modern addEventListener, fallback to addListener
			if ('addEventListener' in mql) {
				mql.addEventListener('change', onMqlChange as EventListener)
				cleanups.push(() => mql && 'removeEventListener' in mql && mql.removeEventListener('change', onMqlChange as EventListener))
			} else if ('addListener' in mql) {
				;(mql as any).addListener(onMqlChange)
				cleanups.push(() => (mql as any)?.removeListener(onMqlChange))
			}
		}

		// --- 2) beforeprint / afterprint (widely supported, including Firefox) ---
		const handleBeforePrint = () => safeSet(true)
		const handleAfterPrint = () => safeSet(false)

		window.addEventListener('beforeprint', handleBeforePrint)
		window.addEventListener('afterprint', handleAfterPrint)
		cleanups.push(() => {
			window.removeEventListener('beforeprint', handleBeforePrint)
			window.removeEventListener('afterprint', handleAfterPrint)
		})

		// --- 3) Conservative focus/blur fallback (some UIs don’t toggle the above immediately) ---
		// If the window blurs but the tab stays visible and mql doesn't flip,
		// we *might* be in a modal print UI. Debounce to avoid false positives.
		const onBlur = () => {
			if (!enableFallback) return
			// If mql already reports printing, no need to guess
			if (mql?.matches) return

			// Only treat as printing if we remain blurred for a beat
			blurTimerRef.current = window.setTimeout(() => {
				// Still not matched by mql and no afterprint yet → assume print overlay
				safeSet(true)
			}, fallbackDebounceMs)
		}

		const onFocus = () => {
			if (blurTimerRef.current != null) {
				clearTimeout(blurTimerRef.current)
				blurTimerRef.current = null
			}
			// If we guessed "printing" via blur, coming back to focus should clear it
			// (mql/afterprint handlers will also clear it when they fire).
			safeSet(false)
		}

		if (enableFallback) {
			window.addEventListener('blur', onBlur)
			window.addEventListener('focus', onFocus)
			cleanups.push(() => {
				window.removeEventListener('blur', onBlur)
				window.removeEventListener('focus', onFocus)
				if (blurTimerRef.current != null) {
					clearTimeout(blurTimerRef.current)
					blurTimerRef.current = null
				}
			})
		}

		return () => {
			cleanups.forEach(fn => fn())
		}
	}, [enableFallback, fallbackDebounceMs])

	return isPrinting
}

export default useDetectPrint
