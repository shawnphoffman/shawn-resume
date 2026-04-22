import type { ReactNode } from 'react'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'

import styles from 'app/Global.module.css'
import PhotoBox from '@/components/PhotoBox'
import VideoBox from '@/components/VideoBox'
import Pills from '@/components/Pills'
import CompanyIcon from '@/components/CompanyIcon'
import { faArrowUpRightFromSquare } from '@awesome.me/kit-94ef14ccff/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { independentProjects, type ProjectBulletSegment } from 'app/resume-data'

import hoffstuffIcon from '@/images/hoffstuff-icon.png'
import wraptIcon from '@/images/wrapt-icon.png'
import gamingIcon from '@/images/gaming-icon.png'
import hospitalityIcon from '@/images/hospitality-channels-icon.png'
import blueskyIcon from '@/images/bluesky-icon.png'
import medstashIcon from '@/images/medstash-icon.png'
import hoffstuff1 from '@/images/hoffstuff-1.png'
import hoffstuff2 from '@/images/hoffstuff-2.png'
import hoffstuff3 from '@/images/hoffstuff-3.png'
import hoffstuff4 from '@/images/hoffstuff-4.png'
import hoffstuff5 from '@/images/hoffstuff-5.png'
import hoffstuff6 from '@/images/hoffstuff-6.png'
import hoffstuff7 from '@/images/hoffstuff-7.png'
import contacts1 from '@/images/contacts-1.png'
import contacts2 from '@/images/contacts-2.png'
import contacts3 from '@/images/contacts-3.png'
import contacts4 from '@/images/contacts-4.png'
import med1 from '@/images/medstash-dark-1.png'
import med2 from '@/images/medstash-dark-2.png'
import med3 from '@/images/medstash-dark-3.png'
import med4 from '@/images/medstash-dark-4.png'
import med5 from '@/images/medstash-light-1.png'
import med6 from '@/images/medstash-light-2.png'
import med7 from '@/images/medstash-light-3.png'
import med8 from '@/images/medstash-light-4.png'
import wrapt1 from '@/images/wrapt-1.png'
import wrapt2 from '@/images/wrapt-2.png'
import wrapt3 from '@/images/wrapt-3.png'
import wrapt4 from '@/images/wrapt-4.png'
import trashLight from '@/images/trash-light-1.jpg'

const iconByKey: Record<string, StaticImageData> = {
	hoffstuff: hoffstuffIcon,
	wrapt: wraptIcon,
	gaming: gamingIcon,
	hospitality: hospitalityIcon,
	bluesky: blueskyIcon,
	medstash: medstashIcon,
}

const photosByKey: Record<string, StaticImageData[]> = {
	hoffstuff: [hoffstuff1, hoffstuff2, hoffstuff3, hoffstuff4, hoffstuff5, hoffstuff6, hoffstuff7],
	wrapt: [wrapt1, wrapt2, wrapt3, wrapt4],
	medstash: [med1, med2, med3, med4, med5, med6, med7, med8],
	contacts: [contacts1, contacts2, contacts3, contacts4],
	trash: [trashLight],
}

const videoByKey: Record<string, string> = {
	hospitalityVideo: '/sample-output.mp4',
}

const displayNameOverrides: Record<string, ReactNode> = {
	hoffstuff: (
		<>
			Family Wish Lists <span className={styles.lowercase}>/ </span> &quot;HoffStuff&quot;
		</>
	),
}

function renderMedia(mediaKey: string) {
	if (photosByKey[mediaKey]) return <PhotoBox images={photosByKey[mediaKey]} />
	if (videoByKey[mediaKey]) return <VideoBox src={videoByKey[mediaKey]} />
	return null
}

function renderSegment(segment: ProjectBulletSegment, key: number): ReactNode {
	switch (segment.kind) {
		case 'text':
			return <span key={key}>{segment.text}</span>
		case 'link':
			return (
				<Link key={key} href={segment.href} target="_blank">
					{segment.text}
				</Link>
			)
		case 'iconLink':
			return (
				<Link key={key} href={segment.href} target="_blank" aria-label={segment.label}>
					<FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
				</Link>
			)
		case 'mediaInline':
			return <span key={key}>{renderMedia(segment.mediaKey)}</span>
	}
}

export default function Independent() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Independent Projects</h2>
			{independentProjects.map(project => {
				const classes = [styles.stint, project.noBreak ? styles.noBreak : '', project.noPrint ? styles.noPrint : ''].filter(Boolean).join(' ')
				const icon = project.iconKey ? iconByKey[project.iconKey] : null
				return (
					<div key={project.slug} className={classes}>
						<div className={styles.companyContainer}>
							{icon ? <CompanyIcon image={icon} alt={project.iconAlt ?? project.name} /> : null}
							<h3 className={styles.company}>{displayNameOverrides[project.slug] ?? project.name}</h3>
							{project.mediaKey ? renderMedia(project.mediaKey) : null}
							{project.externalLink ? (
								<Link href={project.externalLink.href} target="_blank" aria-label={project.externalLink.label}>
									<FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
								</Link>
							) : null}
							<Pills pills={project.pills} />
						</div>
						<div className={styles.position}>
							<ul className={styles.bulletedList}>
								{project.bullets.map((bullet, bulletIndex) => (
									<li key={bulletIndex}>{bullet.segments.map((segment, segmentIndex) => renderSegment(segment, segmentIndex))}</li>
								))}
							</ul>
						</div>
					</div>
				)
			})}
		</>
	)
}
