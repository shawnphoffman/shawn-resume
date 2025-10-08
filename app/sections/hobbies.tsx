import styles from 'app/Global.module.css'

export default function Hobbies() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Hobbies</h2>
			<div className={styles.columnedLists}>
				<ul className={styles.bulletedList}>
					<li>Hiking and Trail Angel work</li>
					<li>Model building and painting</li>
					<li>Video game streaming</li>
				</ul>
				<ul className={styles.bulletedList}>
					<li>Fighting game tournaments</li>
					<li>Custom arcade stick building</li>
					<li>Podcast website development</li>
				</ul>
				<ul className={styles.bulletedList}>
					<li>Open source contributions</li>
					<li>Blog writing and documentation</li>
					<li>Twitch and Discord bot development</li>
				</ul>
			</div>
		</>
	)
}
