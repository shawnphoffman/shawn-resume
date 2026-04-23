import styles from './Pills.module.css'

function Pills({ pills }: { pills: string[] }) {
	return (
		<div className={styles.pills}>
			{pills.map(pill => (
				<div key={pill} className={styles.pill}>
					{pill}
				</div>
			))}
		</div>
	)
}

export default Pills
