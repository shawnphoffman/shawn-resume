'use client'

import { memo, useEffect } from 'react'

interface ErrorProps {
	error: Error & { digest?: string }
	reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div>
			<h1>Something went wrong!</h1>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	)
}

export default memo(Error)
