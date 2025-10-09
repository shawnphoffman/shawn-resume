'use client'

import { memo, useMemo } from 'react'

import styles from 'app/Global.module.css'
import useDetectPrint from 'hooks/useDetectPrint'

const Contact = () => {
	const isPrinting = useDetectPrint()

	// Memoize the decoded values to avoid re-computation on every render
	const contactInfo = useMemo(
		() => ({
			website: 'https://shawn.party',
			email: typeof window !== 'undefined' ? window.atob('c2hhd25Ac2VudC5hcw==') : '',
			phone: typeof window !== 'undefined' ? window.atob('MzE3LjYwNC4wMzI1') : '',
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
			<a href={`tel:${contactInfo.phone}`} className={styles.contact}>
				{contactInfo.phone}
			</a>
		</>
	)
}

export default memo(Contact)
