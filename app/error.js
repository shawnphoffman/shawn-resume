'use client'

import { memo, useEffect } from 'react'

const Error = ({ error, reset }) => {
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
