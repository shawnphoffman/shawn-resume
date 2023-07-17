'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export const useDeviceTheme = () => {
	const test = typeof window !== 'undefined'
	const mediaQuery = useRef(test ? window?.matchMedia('(prefers-color-scheme: dark)') : null)

	const [deviceTheme, setDeviceTheme] = useState('theme-light')

	const mediaListenerHandler = useCallback(
		matches => {
			return matches ? setDeviceTheme('theme-dark') : setDeviceTheme('theme-light')
		},
		[setDeviceTheme]
	)

	useEffect(() => {
		if (mediaQuery.current?.matches) {
			setDeviceTheme('theme-dark')
		} else {
			setDeviceTheme('theme-light')
		}
	}, [])

	useEffect(() => {
		const listener = ({ matches }) => mediaListenerHandler(matches)

		const currentMediaQuery = mediaQuery.current
		currentMediaQuery?.addEventListener('change', listener)

		return () => {
			currentMediaQuery?.removeEventListener('change', listener)
		}
	}, [mediaListenerHandler])

	return deviceTheme
}

export default useDeviceTheme
