export interface Person {
	name: string
	headline: string
	website: string
	email: string
}

export const person: Person = {
	name: 'Shawn Hoffman',
	headline: 'Software Engineer',
	website: 'https://shawnhoffman.dev',
	email: 'shawn@sent.as',
}

export interface EmploymentBullet {
	text: string
	externalLink?: { href: string; label: string }
}

export interface Position {
	title: string
	start: string
	end: string
	bullets?: EmploymentBullet[]
	bulletsNoPrint?: boolean
}

export interface Employment {
	company: string
	pills: string[]
	positions: Position[]
}

export const employment: Employment[] = [
	{
		company: 'Independent Contractor',
		pills: ['AI', 'React', 'NextJS', 'Rails'],
		positions: [{ title: 'Contract Software Engineer', start: 'January 2026', end: 'Current' }],
	},
	{
		company: 'Snow Owl',
		pills: ['Svelte', 'AI', 'Framer'],
		positions: [
			{
				title: 'Software Engineer',
				start: 'September 2023',
				end: 'December 2025',
				bullets: [
					{
						text: 'Developed front-end components for AI-powered workflow automation platform including workflow editors, design systems, dynamic form builders, and AI-powered chat interfaces.',
					},
				],
			},
		],
	},
	{
		company: 'Coinbase',
		pills: ['React', 'TypeScript', 'React Native'],
		positions: [
			{
				title: 'Senior Software Engineer',
				start: 'October 2020',
				end: 'September 2022',
				bullets: [
					{
						text: 'Led the front-end decomposition of Coinbase-wide login from Rails monolith to React application.',
						externalLink: { href: 'https://login.coinbase.com', label: 'View Coinbase Login' },
					},
					{ text: 'Converted mobile app native login to web-based login experience; reducing duplication and deployment times.' },
					{ text: 'Added registration and profile support for decentralized identity ENS names through Coinbase Wallet extension.' },
					{ text: 'Mentored incoming software engineers on best practices, code quality, career coaching, and criteria for advancement.' },
					{ text: 'Worked extensively to decompose frontends out of legacy Rails monolith into their own modern applications.' },
				],
			},
		],
	},
	{
		company: 'Dynamic Signal',
		pills: ['React', 'JavaScript', 'Management'],
		positions: [
			{
				title: 'Staff Software Engineer',
				start: 'July 2019',
				end: 'June 2020',
				bullets: [
					{ text: 'Focused attention on standing up new React web application to replace 8-year old management site monolith.' },
					{ text: 'Collaborated with lead front-end architect to rapidly develop groundwork alongside iterative design process.' },
				],
			},
			{
				title: 'Manager of Front-End Engineering',
				start: 'May 2017',
				end: 'July 2019',
				bullets: [
					{ text: "Encouraged and grew team of engineers that maintained all front-end web applications and the platform's public API." },
					{ text: 'Championed and led major modernization project converting the member-facing site from .NET MVC & Knockout to React.' },
					{
						text: 'Created a desktop application and build tool in an effort to drive end user engagement and combat legacy browser usage.',
					},
					{ text: 'Applied best practices and an empathetic approach when creating a swim lane process that helped engineering scale.' },
					{
						text: 'Architected, organized, and managed ambitious scripting engine project; making integrations quick and easy to deliver.',
					},
					{ text: 'Awarded company MVP Q4 2018 from individually submitted feedback and team nominations.' },
					{ text: 'Organized first internal hackathon from concept to execution, leading to multiple entries being added to the product.' },
				],
			},
			{
				title: 'Senior Software Engineer',
				start: 'July 2015',
				end: 'May 2017',
				bullets: [
					{ text: 'Standardized public API development and created the user interface and tooling for generated API documentation.' },
					{
						text: 'Founded the internal "Culture Committee", focused on promoting positive company culture and inclusion across offices.',
					},
				],
			},
		],
	},
	{
		company: 'ADESA / Sogeti',
		pills: ['.NET', 'JavaScript', 'CSS'],
		positions: [
			{
				title: 'Software Engineer & Scrum Master',
				start: 'June 2012',
				end: 'June 2015',
				bulletsNoPrint: true,
				bullets: [
					{
						text: 'Designed enterprise web portal for creating and managing variable pricing engine across all auctions and business units.',
					},
					{ text: 'Upgraded business-critical web front-end from MVC 2 to MVC 5.2 and converted all content from ASP Forms to Razor.' },
					{
						text: 'Refactored entire application from page-specific CSS to a globally consolidated LESS structure utilizing common variables.',
					},
					{ text: 'Developed workflow for efficient vehicle identification based on manufacturer build data and process improvement.' },
					{ text: 'Led development team in technical effort to utilize modern Azure capabilities as well as optimize web performance' },
					{ text: 'Implemented an enterprise-wide, customer-facing, industry-standard grading system for remarketed vehicles.' },
					{ text: 'Researched and documented architecture and design principles for inherited large-scale ExtJS web application.' },
					{
						text: 'Developed a range of full-stack systems including .NET web service offerings, customizable cloud-based enterprise systems, single page web applications, Oracle master-data systems, and existing system stabilization/modernization.',
					},
				],
			},
		],
	},
]

export type ProjectBulletSegment =
	| { kind: 'text'; text: string }
	| { kind: 'link'; text: string; href: string }
	| { kind: 'iconLink'; href: string; label: string }
	| { kind: 'mediaInline'; mediaKey: string }

export interface ProjectBullet {
	segments: ProjectBulletSegment[]
}

export interface Project {
	slug: string
	name: string
	pills: string[]
	bullets: ProjectBullet[]
	mediaKey?: string
	iconKey?: string
	iconAlt?: string
	noPrint?: boolean
	noBreak?: boolean
	externalLink?: { href: string; label: string }
}

export const independentProjects: Project[] = [
	{
		slug: 'hoffstuff',
		name: 'Family Wish Lists / "HoffStuff"',
		iconKey: 'hoffstuff',
		iconAlt: 'Wish Lists / HoffStuff',
		mediaKey: 'hoffstuff',
		pills: ['NextJS', 'TypeScript', 'Supabase'],
		noBreak: true,
		bullets: [
			{
				segments: [
					{
						kind: 'text',
						text: 'Web application for creating and sharing wish lists with family and friends built with NextJS and Supabase.',
					},
				],
			},
			{
				segments: [
					{
						kind: 'text',
						text: 'Users can also manage their own gift giving, off-list addons, gift ideas, and spend tracking within the app.',
					},
				],
			},
			{
				segments: [
					{ kind: 'text', text: 'User permissions make it possible to coordinate gifts and list management while maintaining secrecy.' },
				],
			},
			{
				segments: [
					{
						kind: 'text',
						text: 'Fetches product details and images from websites when a URL is provided, simplifying the adding process.',
					},
				],
			},
		],
	},
	{
		slug: 'giftwrapt',
		name: 'GiftWrapt',
		iconKey: 'wrapt',
		iconAlt: 'GiftWrapt',
		mediaKey: 'wrapt',
		pills: ['TanStack', 'TypeScript', 'Postgres', 'Docker'],
		noBreak: true,
		noPrint: true,
		bullets: [
			{
				segments: [
					{
						kind: 'text',
						text: 'WIP Complete ground-up rewrite of the family wish lists project, making it fully open-source and self-hostable.',
					},
				],
			},
			{
				segments: [
					{ kind: 'text', text: 'Improved functionality and service-provider independent through self-container Docker deployment.' },
				],
			},
		],
	},
	{
		slug: 'hospitality-channels',
		name: 'Hospitality Channels',
		iconKey: 'hospitality',
		iconAlt: 'Hospitality Channels',
		mediaKey: 'hospitalityVideo',
		pills: ['TypeScript', 'FFmpeg', 'Docker'],
		noPrint: true,
		externalLink: { href: 'https://github.com/shawnphoffman/hospitality-channels', label: 'Hospitality Channels on GitHub' },
		bullets: [
			{
				segments: [
					{ kind: 'text', text: 'Self-hosted guest TV channel creation system for hospitality environments like guest rooms and Airbnbs.' },
				],
			},
			{
				segments: [
					{
						kind: 'text',
						text: 'Template-driven video clips composable into multi-clip programs with background audio, rendered to MP4 via headless Chromium and FFmpeg.',
					},
				],
			},
			{ segments: [{ kind: 'text', text: 'Built-in Tunarr integration for pushing published channels directly to IPTV playlists.' }] },
		],
	},
	{
		slug: 'bluesky',
		name: 'Bluesky Projects',
		iconKey: 'bluesky',
		iconAlt: 'Bluesky Projects',
		pills: ['atproto', 'WebSockets', 'Docker'],
		noPrint: true,
		bullets: [
			{
				segments: [
					{ kind: 'text', text: 'Built a custom ' },
					{ kind: 'link', text: 'Star Wars feed', href: 'https://bsky.app/profile/dev.shawn.party/feed/star-wars' },
					{ kind: 'text', text: ' with some of the best Star Wars content promoting positivity and community.' },
					{ kind: 'iconLink', href: 'https://feed.justshillin.com/', label: 'Star Wars Bluesky Feed Client' },
				],
			},
			{
				segments: [
					{ kind: 'text', text: 'Host and maintain a custom Bluesky ' },
					{ kind: 'link', text: 'moderation bot account', href: 'https://bsky.app/profile/mod.shawn.party' },
					{ kind: 'text', text: ' and labeler to help identify potential spoiler content.' },
				],
			},
		],
	},
	{
		slug: 'gaming',
		name: 'Video Game Companions',
		iconKey: 'gaming',
		iconAlt: 'Video Game Companions',
		pills: ['NextJS', 'TypeScript', 'Unreal'],
		noPrint: true,
		bullets: [
			{
				segments: [
					{ kind: 'link', text: 'Satisfactory Notebook', href: 'https://satisfactory-notebook.com/' },
					{ kind: 'text', text: ': A game companion for those that prefer to print things out or just like a quick reference.' },
				],
			},
			{
				segments: [
					{ kind: 'link', text: 'Dyson Sphere Planner', href: 'https://dyson-sphere-planner.com/' },
					{ kind: 'text', text: ': A companion for Dyson Sphere Program that allows you to easily reference and print recipes.' },
				],
			},
		],
	},
	{
		slug: 'misc',
		name: 'Misc Projects',
		iconKey: 'medstash',
		iconAlt: 'Misc Projects',
		pills: ['NextJS', 'TypeScript', 'RSS', 'MapBox', 'Adobe'],
		noPrint: true,
		bullets: [
			{
				segments: [
					{ kind: 'link', text: 'MedStash', href: 'https://github.com/shawnphoffman/medstash' },
					{ kind: 'text', text: ': Straightforward self-hosted web app for storing receipts for long-term HSA recordkeeping. ' },
					{ kind: 'mediaInline', mediaKey: 'medstash' },
				],
			},
			{
				segments: [
					{ kind: 'link', text: 'Shared Contacts', href: 'https://github.com/shawnphoffman/shared-contacts' },
					{ kind: 'text', text: ': Self-hosted app for sharing and synchronizing contacts across devices with a modern UI. ' },
					{ kind: 'mediaInline', mediaKey: 'contacts' },
				],
			},
			{
				segments: [
					{
						kind: 'text',
						text: 'Podcast Landing Pages: Powered by NextJS and integrated blogs with Sanity Studio for some friend’s podcasts - ',
					},
					{ kind: 'link', text: 'High Potion', href: 'https://myweirdfoot.com' },
					{ kind: 'text', text: ' / ' },
					{ kind: 'link', text: 'Blue Harvest', href: 'https://blueharvest.rocks' },
					{ kind: 'text', text: ' / ' },
					{ kind: 'link', text: 'Jammed Transmissions', href: 'https://jammedtransmissions.com' },
					{ kind: 'text', text: ' / ' },
					{ kind: 'link', text: 'Dinner with the Heelers', href: 'https://blueypodcast.com' },
					{ kind: 'text', text: ' / ' },
					{ kind: 'link', text: 'Scruffy Lookin Podcasters', href: 'https://scruffypod.com' },
					{ kind: 'text', text: ' .' },
				],
			},
			{
				segments: [
					{ kind: 'link', text: 'News Years Eras Letter', href: 'https://2024.madison.rocks/' },
					{ kind: 'text', text: ": My take on Madison's New Years Letter, themed and inspired by the Eras Tour." },
				],
			},
			{
				segments: [
					{ kind: 'link', text: 'PCT Hike Tracker', href: 'https://madison.rocks/' },
					{ kind: 'text', text: ": Visualizing Madison's PCT adventure with links to bonus content like newsletters and photos." },
				],
			},
			{
				segments: [
					{ kind: 'link', text: 'Star Wars Celebration Events', href: 'https://swc.events/' },
					{ kind: 'text', text: ': A convention companion making it easy to plan your trip with official and unofficial events.' },
				],
			},
			{
				segments: [
					{ kind: 'link', text: 'After Effects Plugin', href: 'https://github.com/shawnphoffman/ae-photo-slideshow' },
					{
						kind: 'text',
						text: ': Allows you to use photo GPS data to fetch the city and state, add it and the date to a composition as a text layer, and batch process everything (with transitions) to an output composition. This was used to create multiple 600+ photo slideshows for long-distance hikers.',
					},
				],
			},
			{
				segments: [
					{ kind: 'link', text: 'Tahoe Air Quality', href: 'https://goober.house/' },
					{ kind: 'text', text: ': Dead simple air quality indicator using data from a local air quality station and local APIs.' },
				],
			},
			{
				segments: [
					{
						kind: 'text',
						text: 'Home Automations: The most popular being an outdoor light thats color helps you know what the next trash pickup is, powered by Home Assistant and a custom integration with the waste management website. Blue indicates that it is a recycling week and green is for yard waste. ',
					},
					{ kind: 'mediaInline', mediaKey: 'trash' },
				],
			},
		],
	},
]

export interface Education {
	institution: string
	bullets: string[]
}

export const education: Education[] = [
	{
		institution: 'Purdue University',
		bullets: ['Bachelors Degree from the School of Technology: Computer and Information Technology'],
	},
]

export interface SkillGroup {
	items: string[]
}

export const skills: SkillGroup[] = [
	{ items: ['JavaScript', 'TypeScript', 'React', 'NextJS'] },
	{ items: ['Postgres', 'SQLite', 'Redis', 'KV'] },
	{ items: ['REST', 'GraphQL', 'OAuth', 'OWASP'] },
	{ items: ['HTML', 'CSS', 'Tailwind', 'shadcn'] },
	{ items: ['NodeJS', 'Docker', 'nginx', 'Traefik'] },
	{ items: ['React Native', 'Expo', 'Electron'] },
	{ items: ['Cloudflare', 'AWS', 'CloudFront', 'Azure'] },
	{ items: ['Webpack', 'Nitro', 'Storybook', 'Git'] },
	{ items: ['AI', 'OpenAI', 'Cursor', 'Claude'] },
	{ items: ['Svelte', 'SvelteKit', 'Vite'] },
	{ items: ['VSCode', 'C#', '.NET', 'MVC'] },
	{ items: ['Framer', 'Figma', 'Adobe CS'] },
]

export interface HobbySegment {
	text: string
	href?: string
}

export interface Hobby {
	segments: HobbySegment[]
}

export const hobbies: Hobby[] = [
	{
		segments: [
			{ text: 'Volunteer trail work', href: 'https://blog.shawn.party/2025/10/11/trail-crew-wip/' },
			{ text: ' including: building staircases, clearing downed trees with crosscut saws, and general maintenance.' },
		],
	},
	{
		segments: [
			{ text: 'Scale modeling, miniature painting', href: 'https://blog.shawn.party/category/modeling/' },
			{ text: ', building dioramas, laser-cutting, 3D printing, and wood working.' },
		],
	},
	{
		segments: [
			{ text: 'Everything Star Wars, self-hosting, home automation, outdoor activities, road trips, photography, and so much more.' },
		],
	},
]
