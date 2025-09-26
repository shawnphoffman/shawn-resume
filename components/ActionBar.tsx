'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import styles from 'app/Global.module.css'
import { useDeviceTheme } from 'hooks/useDeviceTheme'

type ThemeType = 'theme-light' | 'theme-dark' | 'theme-hotdog' | 'theme-contrast'

const ActionBar = () => {
	const [themeOverride, setThemeOverride] = useState<ThemeType | undefined>()
	const deviceTheme = useDeviceTheme()

	const computedTheme = useMemo(() => {
		return themeOverride ? themeOverride : deviceTheme
	}, [deviceTheme, themeOverride])

	const handleClick = useCallback(
		(theme: ThemeType) => {
			setThemeOverride(theme)
		},
		[setThemeOverride]
	)

	useEffect(() => {
		document.body.className = computedTheme
	}, [computedTheme])

	return (
		<header className={styles.actionBar}>
			<div className={styles.actionIcon} title="Light Theme" onClick={() => handleClick('theme-light')}>
				{/* Light */}
				<i className="fas fa-sun-cloud"></i>
			</div>
			<div className={styles.actionIcon} title="Dark Theme" onClick={() => handleClick('theme-dark')}>
				{/* Dark */}
				<i className="fas fa-clouds-moon"></i>
			</div>
			<div className={styles.actionIcon} title="Hotdog Stand Theme" onClick={() => handleClick('theme-hotdog')}>
				{/* Hotdog */}
				<i className="fas fa-hotdog"></i>
			</div>
			<div className={styles.actionIcon} title="High Contrast Theme" onClick={() => handleClick('theme-contrast')}>
				{/* Hotdog */}
				<i className="fas fa-circle-half-stroke"></i>
			</div>
			<br />
			{/* GitHub Link */}
			{/* <div className={styles.actionIcon}
				title="View Source on GitHub"
				as="a"
				href="https://github.com/shawnphoffman/resume"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-github"></i>
			</div> */}
			{/* Print */}
			{/* <div className={styles.actionIcon} title="Print" onClick={() => handlePrint()}>
				<i className="fas fa-print"></i>
			</div> */}
		</header>
	)
}

export default ActionBar
