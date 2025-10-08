import styles from 'app/Global.module.css'

export default function Education() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Education</h2>
			{/* Purdue */}
			<div className={styles.educationStint}>
				<h3 className={styles.accomplishment}>Purdue University</h3>
				<span className={styles.trainingDate}>May 2012</span>
				<ul className={styles.bulletedList}>
					<li>Bachelors Degree from the School of Technology: Computer and Information Technology</li>
				</ul>
			</div>
			{/* CSM */}
			{/* <div className={styles.educationStint}>
				<h3 className={styles.accomplishment}>Certified Scrum Master</h3>
				<span className={styles.trainingDate}>September 2014</span>
			</div> */}
		</>
	)
}
