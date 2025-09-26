'use client'

import { useEffect, useState } from 'react'

interface UseDetectPrintReturn {
	isPrinting: boolean
	setIsPrinting: (isPrinting: boolean) => void
}

const useDetectPrint = (): UseDetectPrintReturn => {
	const [isPrinting, setIsPrinting] = useState<boolean>(false)

	useEffect(() => {
		const printMq = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('print') : null
		if (!printMq) return

		const mqEvent = (event: MediaQueryListEvent) => {
			setIsPrinting(!!event.matches)
		}

		printMq.addEventListener('change', mqEvent)
		return () => printMq.removeEventListener('change', mqEvent)
	}, [])

	return { isPrinting, setIsPrinting }
}

export default useDetectPrint
