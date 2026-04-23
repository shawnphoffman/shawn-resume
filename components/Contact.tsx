'use client'

import { memo, useMemo } from 'react'

import styles from 'app/Global.module.css'
import useDetectPrint from 'hooks/useDetectPrint'

const Contact = () => {
	const isPrinting = useDetectPrint()

	// Memoize the decoded values to avoid re-computation on every render
	const contactInfo = useMemo(
		() => ({
			website: 'https://shawnhoffman.dev',
			email: typeof window !== 'undefined' ? window.atob('c2hhd25Ac2VudC5hcw==') : '',
		}),
		[]
	)

	if (!isPrinting) return null

	return (
		<>
			<a className={styles.contact} href={contactInfo.website}>
				{contactInfo.website}
			</a>
			<a href={`mailto:${contactInfo.email}`} className={styles.contact}>
				{contactInfo.email}
			</a>
		</>
	)
}

export default memo(Contact)
