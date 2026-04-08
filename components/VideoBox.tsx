'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './VideoBox.module.css'
import photoStyles from './PhotoBox.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm } from '@awesome.me/kit-94ef14ccff/icons/classic/solid'

export default function VideoBox({ src }: { src: string }) {
	const [open, setOpen] = useState(false)

	const handleClose = useCallback((e: React.MouseEvent) => {
		if (e.target === e.currentTarget) setOpen(false)
	}, [])

	useEffect(() => {
		if (!open) return
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false)
		}
		document.addEventListener('keydown', handleKey)
		return () => document.removeEventListener('keydown', handleKey)
	}, [open])

	return (
		<>
			<button className={photoStyles.photoIcon} onClick={() => setOpen(true)} aria-label="Play video">
				<FontAwesomeIcon icon={faPhotoFilm} />
			</button>
			{open &&
				createPortal(
					<div className={styles.overlay} onClick={handleClose}>
						<div className={styles.modal}>
							<button className={styles.close} onClick={() => setOpen(false)} aria-label="Close video">
								✕
							</button>
							<video src={src} controls autoPlay loop muted playsInline className={styles.video} />
						</div>
					</div>,
					document.body
				)}
		</>
	)
}
