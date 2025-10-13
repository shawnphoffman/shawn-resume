import styles from 'app/Global.module.css'
import Link from 'next/link'

export default function Hobbies() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Hobbies</h2>
			<ul className={styles.bulletedList}>
				<li>
					<Link href="https://blog.shawn.party/2025/10/11/trail-crew-wip/" target="_blank">
						Volunteer trail work
					</Link>{' '}
					including: building staircases, clearing downed trees with crosscut saws, and general maintenance.
				</li>
				<li>
					<Link href="https://blog.shawn.party/category/modeling/" target="_blank">
						Scale modeling, miniature painting
					</Link>
					, building dioramas, laser-cutting, 3D printing, and wood working.
				</li>
				<li>Everything Star Wars, self-hosting, home automation, outdoor activities, road trips, photography, and so much more.</li>
			</ul>
		</>
	)
}
