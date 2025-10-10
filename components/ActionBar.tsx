'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

import styles from './ActionBar.module.css'
import { useDeviceTheme } from 'hooks/useDeviceTheme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faCloudsMoon, faHotdog, faSunCloud } from '@awesome.me/kit-94ef14ccff/icons/classic/solid'
import { faGithub } from '@awesome.me/kit-94ef14ccff/icons/classic/brands'

type ThemeType = 'theme-light' | 'theme-dark' | 'theme-hotdog' | 'theme-contrast'

function ActionBar() {
	const [themeOverride, setThemeOverride] = useState<ThemeType | undefined>()
	const deviceTheme = useDeviceTheme()

	const computedTheme = useMemo(() => {
		return themeOverride ? themeOverride : deviceTheme
	}, [deviceTheme, themeOverride])

	useEffect(() => {
		document.body.className = computedTheme
	}, [computedTheme])

	const handleLightClick = useCallback(() => {
		setThemeOverride('theme-light')
	}, [])

	const handleDarkClick = useCallback(() => {
		setThemeOverride('theme-dark')
	}, [])

	const handleHotdogClick = useCallback(() => {
		setThemeOverride('theme-hotdog')
	}, [])

	const handleContrastClick = useCallback(() => {
		setThemeOverride('theme-contrast')
	}, [])

	return (
		<>
			<header className={styles.actionBar}>
				<button
					className={styles.actionIcon}
					title="Light Theme"
					onClick={handleLightClick}
					aria-label="Switch to light theme"
					type="button"
				>
					<FontAwesomeIcon icon={faSunCloud} />
				</button>
				<button className={styles.actionIcon} title="Dark Theme" onClick={handleDarkClick} aria-label="Switch to dark theme" type="button">
					<FontAwesomeIcon icon={faCloudsMoon} />
				</button>
				<button
					className={styles.actionIcon}
					title="Hotdog Stand Theme"
					onClick={handleHotdogClick}
					aria-label="Switch to hotdog stand theme"
					type="button"
				>
					<FontAwesomeIcon icon={faHotdog} />
				</button>
				<button
					className={styles.actionIcon}
					title="High Contrast Theme"
					onClick={handleContrastClick}
					aria-label="Switch to high contrast theme"
					type="button"
				>
					<FontAwesomeIcon icon={faCircleHalfStroke} />
				</button>
			</header>
			<footer className={styles.linkBar}>
				{/* GitHub Link */}
				<Link
					className={styles.actionIcon}
					href="https://github.com/shawnphoffman/resume"
					target="_blank"
					title="GitHub"
					aria-label="View source code on GitHub"
				>
					<FontAwesomeIcon icon={faGithub} />
				</Link>
			</footer>
		</>
	)
}

export default ActionBar
