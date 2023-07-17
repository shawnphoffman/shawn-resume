'use client'

import { memo } from 'react'

import useDetectPrint from 'hooks/useDetectPrint'

const Contact = () => {
	const { isPrinting } = useDetectPrint()

	if (!isPrinting) return null
	return (
		<>
			<a href="https://shawn.party">https://shawn.party</a>
			<div>{window.atob('c2hhd24ucC5ob2ZmbWFuQGdtYWlsLmNvbQ')}</div>
			<div>{window.atob('MzE3LjYwNC4wMzI1')}</div>
		</>
	)
}

export default memo(Contact)
