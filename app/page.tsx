import { memo } from 'react'

import ActionBar from 'components/ActionBar'
import Contact from 'components/Contact'
import Divider from 'components/Divider'

import styles from './Global.module.css'
import Independent from './sections/independent'
import Hobbies from './sections/hobbies'
import Employment from './sections/employment'
import Education from './sections/education'
import Buzzwords from './sections/buzzwords'

const ResumePage = () => {
	return (
		<>
			<ActionBar />
			<div className={styles.documentWrapper}>
				<div className={styles.document}>
					{/* Title */}
					<h1 className={styles.title}>Shawn Hoffman</h1>

					{/* Contact */}
					<div className={styles.contactContainer}>
						<Contact />
					</div>
					<Divider />
					<Employment />
					<Divider />
					<Independent />
					<Divider />
					<Education />
					<Divider />
					<Buzzwords />
					<div className={styles.noPrint}>
						<Divider />
						<Hobbies />
					</div>
				</div>
			</div>
		</>
	)
}

export default memo(ResumePage)
