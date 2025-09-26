'use client'

import { memo } from 'react'

import styles from 'app/Global.module.css'
import useDetectPrint from 'hooks/useDetectPrint'

const Contact = () => {
	const { isPrinting } = useDetectPrint()

	if (!isPrinting) return null
	return (
		<>
			<a className={styles.contact} href="https://shawn.party">
				https://shawn.party
			</a>
			<div className={styles.contact}>{window.atob('c2hhd24ucC5ob2ZmbWFuQGdtYWlsLmNvbQ')}</div>
			<div className={styles.contact}>{window.atob('MzE3LjYwNC4wMzI1')}</div>
		</>
	)
}

export default memo(Contact)
