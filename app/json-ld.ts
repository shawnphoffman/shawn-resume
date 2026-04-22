import { person, employment, education, skills } from 'app/resume-data'

export function buildPersonJsonLd() {
	const dedupedSkills = Array.from(new Set(skills.flatMap(group => group.items)))
	const currentStint = employment[0]

	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: person.name,
		url: person.website,
		email: `mailto:${person.email}`,
		jobTitle: person.headline,
		alumniOf: education.map(entry => ({
			'@type': 'CollegeOrUniversity',
			name: entry.institution,
		})),
		knowsAbout: dedupedSkills,
		...(currentStint
			? {
					worksFor: {
						'@type': 'Organization',
						name: currentStint.company,
					},
				}
			: {}),
	}
}
