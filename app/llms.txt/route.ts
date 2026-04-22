import {
	person,
	employment,
	independentProjects,
	education,
	skills,
	hobbies,
	type ProjectBulletSegment,
	type HobbySegment,
} from 'app/resume-data'

export const dynamic = 'force-static'
export const revalidate = false

function renderProjectSegments(segments: ProjectBulletSegment[]): string {
	return segments
		.map(segment => {
			switch (segment.kind) {
				case 'text':
					return segment.text
				case 'link':
					return `[${segment.text}](${segment.href})`
				case 'iconLink':
					return ` ([${segment.label}](${segment.href}))`
				case 'mediaInline':
					return ''
			}
		})
		.join('')
}

function renderHobbySegments(segments: HobbySegment[]): string {
	return segments
		.map(segment => (segment.href ? `[${segment.text}](${segment.href})` : segment.text))
		.join('')
}

function buildMarkdown(): string {
	const lines: string[] = []

	lines.push(`# ${person.name}`)
	lines.push('')
	lines.push(`> ${person.headline}. Full resume for ${person.name} in plain Markdown, served for AI agents and indexing bots.`)
	lines.push('')
	lines.push('## Contact')
	lines.push('')
	lines.push(`- Website: ${person.website}`)
	lines.push(`- Email: ${person.email}`)
	lines.push('')

	lines.push('## Relevant Employment')
	lines.push('')
	for (const stint of employment) {
		lines.push(`### ${stint.company}`)
		lines.push('')
		lines.push(`Stack: ${stint.pills.join(', ')}`)
		lines.push('')
		for (const position of stint.positions) {
			lines.push(`**${position.title}** — ${position.start} to ${position.end}`)
			lines.push('')
			if (position.bullets?.length) {
				for (const bullet of position.bullets) {
					const link = bullet.externalLink ? ` ([${bullet.externalLink.label}](${bullet.externalLink.href}))` : ''
					lines.push(`- ${bullet.text}${link}`)
				}
				lines.push('')
			}
		}
	}

	lines.push('## Independent Projects')
	lines.push('')
	for (const project of independentProjects) {
		lines.push(`### ${project.name}`)
		lines.push('')
		lines.push(`Stack: ${project.pills.join(', ')}`)
		if (project.externalLink) {
			lines.push('')
			lines.push(`Link: [${project.externalLink.label}](${project.externalLink.href})`)
		}
		lines.push('')
		for (const bullet of project.bullets) {
			lines.push(`- ${renderProjectSegments(bullet.segments)}`)
		}
		lines.push('')
	}

	lines.push('## Education')
	lines.push('')
	for (const entry of education) {
		lines.push(`### ${entry.institution}`)
		lines.push('')
		for (const bullet of entry.bullets) {
			lines.push(`- ${bullet}`)
		}
		lines.push('')
	}

	const dedupedSkills = Array.from(new Set(skills.flatMap(group => group.items)))
	lines.push('## Skills')
	lines.push('')
	for (const skill of dedupedSkills) {
		lines.push(`- ${skill}`)
	}
	lines.push('')

	lines.push('## Hobbies')
	lines.push('')
	for (const hobby of hobbies) {
		lines.push(`- ${renderHobbySegments(hobby.segments)}`)
	}
	lines.push('')

	return lines.join('\n')
}

export function GET() {
	return new Response(buildMarkdown(), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
		},
	})
}
