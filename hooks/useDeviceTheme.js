import { useCallback, useEffect, useRef, useState } from 'react'

export const useDeviceTheme = () => {
	const test = typeof window !== 'undefined'
	const mediaQuery = useRef(test ? window?.matchMedia('(prefers-color-scheme: dark)') : null)

	const [deviceTheme, setDeviceTheme] = useState('light')

	const mediaListenerHandler = useCallback(matches => (matches ? setDeviceTheme('dark') : setDeviceTheme('light')), [setDeviceTheme])

	useEffect(() => {
		if (mediaQuery.current?.matches) {
			setDeviceTheme('dark')
		} else {
			setDeviceTheme('light')
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
