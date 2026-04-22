import styles from 'app/Global.module.css'

import { education } from 'app/resume-data'

export default function Education() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Education</h2>
			{education.map(entry => (
				<div key={entry.institution} className={styles.educationStint}>
					<h3 className={styles.accomplishment}>{entry.institution}</h3>
					<ul className={styles.bulletedList}>
						{entry.bullets.map((bullet, index) => (
							<li key={index}>{bullet}</li>
						))}
					</ul>
				</div>
			))}
		</>
	)
}
