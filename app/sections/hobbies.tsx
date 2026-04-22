import styles from 'app/Global.module.css'
import Link from 'next/link'

import { hobbies } from 'app/resume-data'

export default function Hobbies() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Hobbies</h2>
			<ul className={styles.bulletedList}>
				{hobbies.map((hobby, hobbyIndex) => (
					<li key={hobbyIndex}>
						{hobby.segments.map((segment, segmentIndex) =>
							segment.href ? (
								<Link key={segmentIndex} href={segment.href} target="_blank">
									{segment.text}
								</Link>
							) : (
								<span key={segmentIndex}>{segment.text}</span>
							)
						)}
					</li>
				))}
			</ul>
		</>
	)
}
