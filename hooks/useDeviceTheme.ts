'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type ThemeType = 'theme-light' | 'theme-dark'

export const useDeviceTheme = (): ThemeType => {
	const test = typeof window !== 'undefined'
	const mediaQuery = useRef<MediaQueryList | null>(test ? window?.matchMedia('(prefers-color-scheme: dark)') : null)

	const [deviceTheme, setDeviceTheme] = useState<ThemeType>('theme-light')

	const mediaListenerHandler = useCallback(
		(matches: boolean) => {
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
		const listener = ({ matches }: MediaQueryListEvent) => mediaListenerHandler(matches)

		const currentMediaQuery = mediaQuery.current
		currentMediaQuery?.addEventListener('change', listener)

		return () => {
			currentMediaQuery?.removeEventListener('change', listener)
		}
	}, [mediaListenerHandler])

	return deviceTheme
}

export default useDeviceTheme
