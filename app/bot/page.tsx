import type { Metadata } from 'next'

import { person, employment, independentProjects, education, skills, hobbies, type ProjectBulletSegment, type HobbySegment } from 'app/resume-data'

export const metadata: Metadata = {
	title: `${person.name} — Plain Text Resume`,
	description: `Bot-friendly plain-HTML resume for ${person.name}.`,
	robots: { index: false, follow: true },
}

const dedupedSkills = Array.from(new Set(skills.flatMap(group => group.items)))

function renderProjectSegment(segment: ProjectBulletSegment, key: number) {
	switch (segment.kind) {
		case 'text':
			return <span key={key}>{segment.text}</span>
		case 'link':
			return (
				<a key={key} href={segment.href}>
					{segment.text}
				</a>
			)
		case 'iconLink':
			return (
				<span key={key}>
					{' '}
					(<a href={segment.href}>{segment.label}</a>)
				</span>
			)
		case 'mediaInline':
			return null
	}
}

function renderHobbySegment(segment: HobbySegment, key: number) {
	if (segment.href) {
		return (
			<a key={key} href={segment.href}>
				{segment.text}
			</a>
		)
	}
	return <span key={key}>{segment.text}</span>
}

export default function BotResumePage() {
	return (
		<main lang="en">
			<h1>{person.name}</h1>
			<p>{person.headline}</p>
			<address>
				<a href={person.website}>{person.website}</a>
				<br />
				<a href={`mailto:${person.email}`}>{person.email}</a>
			</address>

			<section>
				<h2>Relevant Employment</h2>
				{employment.map(stint => (
					<article key={stint.company}>
						<h3>{stint.company}</h3>
						<p>
							<strong>Stack:</strong> {stint.pills.join(', ')}
						</p>
						{stint.positions.map(position => (
							<div key={position.title + position.start}>
								<h4>
									{position.title} — {position.start} to {position.end}
								</h4>
								{position.bullets?.length ? (
									<ul>
										{position.bullets.map((bullet, bulletIndex) => (
											<li key={bulletIndex}>
												{bullet.text}
												{bullet.externalLink ? (
													<>
														{' '}
														(<a href={bullet.externalLink.href}>{bullet.externalLink.label}</a>)
													</>
												) : null}
											</li>
										))}
									</ul>
								) : null}
							</div>
						))}
					</article>
				))}
			</section>

			<section>
				<h2>Independent Projects</h2>
				{independentProjects.map(project => (
					<article key={project.slug}>
						<h3>{project.name}</h3>
						<p>
							<strong>Stack:</strong> {project.pills.join(', ')}
						</p>
						{project.externalLink ? (
							<p>
								<a href={project.externalLink.href}>{project.externalLink.label}</a>
							</p>
						) : null}
						<ul>
							{project.bullets.map((bullet, bulletIndex) => (
								<li key={bulletIndex}>{bullet.segments.map((segment, segmentIndex) => renderProjectSegment(segment, segmentIndex))}</li>
							))}
						</ul>
					</article>
				))}
			</section>

			<section>
				<h2>Education</h2>
				{education.map(entry => (
					<article key={entry.institution}>
						<h3>{entry.institution}</h3>
						<ul>
							{entry.bullets.map((bullet, index) => (
								<li key={index}>{bullet}</li>
							))}
						</ul>
					</article>
				))}
			</section>

			<section>
				<h2>Skills</h2>
				<ul>
					{dedupedSkills.map(skill => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</section>

			<section>
				<h2>Hobbies</h2>
				<ul>
					{hobbies.map((hobby, hobbyIndex) => (
						<li key={hobbyIndex}>{hobby.segments.map((segment, segmentIndex) => renderHobbySegment(segment, segmentIndex))}</li>
					))}
				</ul>
			</section>
		</main>
	)
}
