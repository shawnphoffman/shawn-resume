import styles from './Pills.module.css'

function Pills({ pills }: { pills: string[] }) {
	return (
		<>
			<div className={styles.pills}>
				{pills.map(pill => (
					<div key={pill} className={styles.pill}>
						{pill}
					</div>
				))}
			</div>
			<div className={styles.skills}>
				<span className={styles.skillsLabel}>Skills:</span> {pills.join(', ')}
			</div>
		</>
	)
}

export default Pills
