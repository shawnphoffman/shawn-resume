import Pills from '@/components/Pills'
import { faArrowUpRightFromSquare } from '@awesome.me/kit-94ef14ccff/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'app/Global.module.css'
import Link from 'next/link'

import { employment } from 'app/resume-data'

export default function Employment() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Experience</h2>
			{employment.map(stint => (
				<div key={stint.company} className={styles.stint}>
					<div className={styles.companyContainer}>
						<h3 className={styles.company}>{stint.company}</h3>
					</div>
					{stint.positions.map((position, positionIndex) => {
						const bulletList = position.bullets?.length ? (
							<ul className={styles.bulletedList}>
								{position.bullets.map((bullet, bulletIndex) => (
									<li key={bulletIndex}>
										{bullet.text}
										{bullet.externalLink ? (
											<>
												{' '}
												<Link href={bullet.externalLink.href} target="_blank" aria-label={bullet.externalLink.label}>
													<FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
												</Link>
											</>
										) : null}
									</li>
								))}
							</ul>
						) : null
						return (
							<div key={position.title + position.start} className={styles.position}>
								<div className={styles.positionHeader}>
									<div className={styles.positionTitleRow}>
										<h4 className={styles.positionName}>{position.title}</h4>
										<span className={styles.positionDate}>
											{position.start} - {position.end}
										</span>
									</div>
									{positionIndex === 0 ? <Pills pills={stint.pills} /> : null}
								</div>
								{position.bulletsNoPrint && bulletList ? <div className={styles.noPrint}>{bulletList}</div> : bulletList}
							</div>
						)
					})}
				</div>
			))}
		</>
	)
}
