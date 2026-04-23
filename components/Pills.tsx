import styles from './Pills.module.css'

function Pills({ pills }: { pills: string[] }) {
	return (
		<div className={styles.pills}>
			{pills.map((pill, index) => (
				<div key={pill} className={styles.pill}>
					{index > 0 ? <span className={styles.srOnly}>, </span> : null}
					{pill}
				</div>
			))}
		</div>
	)
}

export default Pills
