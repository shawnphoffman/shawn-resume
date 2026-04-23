import { GithubIcon, GlobeIcon, MailIcon } from 'lucide-react'

export interface WorkEntry {
	company: string
	href?: string
	badges: string[]
	location?: string
	title: string
	logoUrl?: string
	start: string
	end: string
	description: string
}

export interface EducationEntry {
	school: string
	href?: string
	degree: string
	logoUrl?: string
	start: string
	end: string
}

export interface ProjectEntry {
	title: string
	href?: string
	dates?: string
	active: boolean
	description: string
	technologies: string[]
	links: { icon: React.ReactNode; type: string; href: string }[]
	image?: string
	video?: string
}

export interface ResumeData {
	name: string
	initials: string
	url: string
	location: string
	locationLink: string
	description: string
	summary: string
	avatarUrl: string
	skills: string[]
	contact: {
		email: string
		tel?: string
		social: Record<string, { name: string; url: string; icon: React.ReactNode; navbar: boolean }>
	}
	work: WorkEntry[]
	education: EducationEntry[]
	projects: ProjectEntry[]
}

export const resume: ResumeData = {
	name: 'Shawn Hoffman',
	initials: 'SH',
	url: 'https://shawnhoffman.dev',
	location: 'United States',
	locationLink: 'https://shawnhoffman.dev',
	description: 'Software Engineer focused on React, TypeScript, and delightful product UX.',
	summary:
		'Independent contract software engineer with 10+ years shipping web products. Most recently at Snow Owl building AI-powered workflow tooling, and before that led front-end decomposition of Coinbase login out of a Rails monolith. I like modernizing crusty codebases, mentoring engineers, and shipping small things at home on the side.',
	avatarUrl: '/images/shawn.jpg',
	skills: [
		'TypeScript',
		'React',
		'Next.js',
		'Svelte',
		'Node.js',
		'Postgres',
		'Redis',
		'Docker',
		'Tailwind',
		'shadcn/ui',
		'React Native',
		'Electron',
		'AI / OpenAI',
		'AWS',
		'Cloudflare',
	],
	contact: {
		email: 'shawn@sent.as',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/shawnphoffman',
				icon: <GithubIcon className="size-4" />,
				navbar: true,
			},
			Site: {
				name: 'Site',
				url: 'https://shawnhoffman.dev',
				icon: <GlobeIcon className="size-4" />,
				navbar: true,
			},
			email: {
				name: 'Send Email',
				url: 'mailto:shawn@sent.as',
				icon: <MailIcon className="size-4" />,
				navbar: false,
			},
		},
	},
	work: [
		{
			company: 'Independent Contractor',
			badges: ['AI', 'React', 'Next.js', 'Rails'],
			title: 'Contract Software Engineer',
			start: 'Jan 2026',
			end: 'Present',
			description: 'Contract front-end and full-stack work across React, Next.js, and Rails stacks.',
		},
		{
			company: 'Snow Owl',
			badges: ['Svelte', 'AI', 'Framer'],
			title: 'Software Engineer',
			start: 'Sep 2023',
			end: 'Dec 2025',
			description:
				'Developed front-end components for an AI-powered workflow automation platform: workflow editors, design systems, dynamic form builders, and AI-powered chat interfaces.',
		},
		{
			company: 'Coinbase',
			href: 'https://coinbase.com',
			badges: ['React', 'TypeScript', 'React Native'],
			title: 'Senior Software Engineer',
			start: 'Oct 2020',
			end: 'Sep 2022',
			description:
				'Led the front-end decomposition of Coinbase-wide login from a Rails monolith to a standalone React app. Converted the mobile app native login to a web-based experience, added ENS identity support to Coinbase Wallet, and mentored incoming engineers on code quality and career advancement.',
		},
		{
			company: 'Dynamic Signal',
			badges: ['React', 'JavaScript', 'Management'],
			title: 'Staff Software Engineer / Manager of Front-End Engineering',
			start: 'Jul 2015',
			end: 'Jun 2020',
			description:
				'Led major modernization from a .NET MVC + Knockout monolith to React. Previously managed the front-end team, championed a swim-lane engineering process, and architected an internal scripting engine for partner integrations. Awarded company MVP Q4 2018.',
		},
		{
			company: 'ADESA / Sogeti',
			badges: ['.NET', 'JavaScript', 'CSS'],
			title: 'Software Engineer & Scrum Master',
			start: 'Jun 2012',
			end: 'Jun 2015',
			description:
				'Designed an enterprise pricing portal, upgraded MVC 2 → MVC 5.2, and led the team in adopting Azure and modern web performance practices. Shipped a customer-facing vehicle grading system used across the business.',
		},
	],
	education: [
		{
			school: 'Purdue University',
			degree: 'B.S., Computer and Information Technology (School of Technology)',
			start: '',
			end: '',
		},
	],
	projects: [
		{
			title: 'HoffStuff — Family Wish Lists',
			href: 'https://shawnhoffman.dev',
			dates: '',
			active: true,
			description:
				'Web app for creating and sharing wish lists with family, including gift tracking, spend tracking, and permission rules that keep surprises secret. Fetches product details and images from a pasted URL.',
			technologies: ['Next.js', 'TypeScript', 'Supabase'],
			links: [],
			image: '/images/projects/hoffstuff.png',
		},
		{
			title: 'GiftWrapt',
			href: 'https://shawnhoffman.dev',
			dates: 'WIP',
			active: true,
			description:
				'Complete ground-up rewrite of the family wish lists project as a fully open-source, self-hostable Docker deployment.',
			technologies: ['TanStack', 'TypeScript', 'Postgres', 'Docker'],
			links: [],
			image: '/images/projects/wrapt.png',
		},
		{
			title: 'Hospitality Channels',
			href: 'https://github.com/shawnphoffman/hospitality-channels',
			active: true,
			description:
				'Self-hosted guest TV channel creation system for hospitality environments. Template-driven video clips render to MP4 via headless Chromium + FFmpeg, with built-in Tunarr integration.',
			technologies: ['TypeScript', 'FFmpeg', 'Docker'],
			links: [
				{
					icon: <GithubIcon className="size-3" />,
					type: 'Source',
					href: 'https://github.com/shawnphoffman/hospitality-channels',
				},
			],
			video: '/images/projects/hospitality.mp4',
		},
		{
			title: 'Bluesky Star Wars Feed & Moderation',
			href: 'https://feed.justshillin.com/',
			active: true,
			description:
				'Custom Bluesky feed highlighting great Star Wars content, plus a moderation bot and labeler that flags potential spoilers in the Star Wars community.',
			technologies: ['atproto', 'WebSockets', 'Docker'],
			links: [
				{
					icon: <GlobeIcon className="size-3" />,
					type: 'Feed',
					href: 'https://bsky.app/profile/dev.shawn.party/feed/star-wars',
				},
			],
		},
		{
			title: 'Satisfactory Notebook & Dyson Sphere Planner',
			href: 'https://satisfactory-notebook.com/',
			active: true,
			description: 'Printable game companion sites for Satisfactory and Dyson Sphere Program — quick-reference recipe books.',
			technologies: ['Next.js', 'TypeScript'],
			links: [
				{ icon: <GlobeIcon className="size-3" />, type: 'Satisfactory', href: 'https://satisfactory-notebook.com/' },
				{ icon: <GlobeIcon className="size-3" />, type: 'Dyson Sphere', href: 'https://dyson-sphere-planner.com/' },
			],
		},
		{
			title: 'MedStash',
			href: 'https://github.com/shawnphoffman/medstash',
			active: true,
			description: 'Self-hosted receipt keeper for long-term HSA recordkeeping.',
			technologies: ['Next.js', 'TypeScript'],
			links: [{ icon: <GithubIcon className="size-3" />, type: 'Source', href: 'https://github.com/shawnphoffman/medstash' }],
		},
	],
}
