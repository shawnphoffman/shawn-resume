import React, { createContext, memo, useContext, useEffect, useMemo } from 'react'
import { useState } from 'react'

import { useDeviceTheme } from 'hooks/useDeviceTheme'
import themeConditional from 'hooks/useThemeConditional'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
	const deviceTheme = useDeviceTheme()

	const [themeOverride, setThemeOverride] = useState()

	const computedTheme = useMemo(() => {
		return themeOverride ? themeOverride : deviceTheme
	}, [deviceTheme, themeOverride])

	const contextValues = useMemo(() => {
		return {
			theme: computedTheme,
			setThemeOverride,
		}
	}, [computedTheme])

	const themeClass = useMemo(() => {
		return themeConditional(computedTheme)
	}, [computedTheme])

	return (
		<ThemeContext.Provider value={contextValues}>
			<div className={themeClass}>{children}</div>
		</ThemeContext.Provider>
	)
}

export const useThemeContext = () => useContext(ThemeContext)

export default memo(ThemeProvider)
