import styles from 'app/Global.module.css'

import { skills } from 'app/resume-data'

export default function Buzzwords() {
	return (
		<>
			<h2 className={`${styles.sectionHeader} ${styles.noPrint}`}>Buzzwords</h2>
			<h2 className={`${styles.sectionHeader} ${styles.onlyPrint}`}>Technical Skills</h2>
			<div className={styles.columnedLists}>
				<ul className={styles.bulletedList}>
					{skills.map((group, groupIndex) => (
						<li key={groupIndex}>
							{group.items.map(item => (
								<span key={item}>{item}</span>
							))}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
