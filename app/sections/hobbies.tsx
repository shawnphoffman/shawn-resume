import styles from 'app/Global.module.css'
import Link from 'next/link'

export default function Hobbies() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Hobbies</h2>
			{/* <div className={styles.columnedLists}> */}
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
				{/* <li>Video game streaming</li> */}
			</ul>
			{/* <ul className={styles.bulletedList}>
					<li>Fighting game tournaments</li>
					<li>Custom arcade stick building</li>
					<li>Podcast website development</li>
				</ul> */}
			{/* <ul className={styles.bulletedList}>
					<li>Open source contributions</li>
					<li>Blog writing and documentation</li>
					<li>Twitch and Discord bot development</li>
				</ul> */}
			{/* </div> */}
		</>
	)
}
