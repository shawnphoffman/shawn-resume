'use client'

import Lightbox, { SlideImage } from 'yet-another-react-lightbox'
import NextJsImage from 'components/NextJsImage'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImageStack } from '@awesome.me/kit-94ef14ccff/icons/classic/solid'
import styles from './PhotoBox.module.css'

export default function PhotoBox({ images }: { images: SlideImage[] }) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button className={styles.photoIcon} onClick={() => setOpen(true)} aria-label="View screenshots">
				<FontAwesomeIcon icon={faImageStack} />
			</button>
			<Lightbox open={open} close={() => setOpen(false)} slides={images} render={{ slide: NextJsImage }} />
		</>
	)
}
