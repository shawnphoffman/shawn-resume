'use client'

import { useEffect, useState } from 'react'

const useDetectPrint = () => {
	const [isPrinting, setIsPrinting] = useState(false)

	useEffect(() => {
		const printMq = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('print')
		const mqEvent = mqList => {
			setIsPrinting(!!mqList.matches)
		}

		printMq.addListener(mqEvent)
		return () => printMq.removeListener(mqEvent)
	}, [])

	return { isPrinting, setIsPrinting }
}

export default useDetectPrint
