import {
	SiCloudflare,
	SiDocker,
	SiElectron,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiShadcnui,
	SiSvelte,
	SiTailwindcss,
	SiTypescript,
} from '@icons-pack/react-simple-icons'
import { CloudIcon, SparklesIcon } from 'lucide-react'
import { type ComponentType } from 'react'

export const skillIcons: Record<string, ComponentType<{ className?: string }> | undefined> = {
	TypeScript: SiTypescript,
	React: SiReact,
	'Next.js': SiNextdotjs,
	Svelte: SiSvelte,
	'Node.js': SiNodedotjs,
	Postgres: SiPostgresql,
	Redis: SiRedis,
	Docker: SiDocker,
	Tailwind: SiTailwindcss,
	'shadcn/ui': SiShadcnui,
	'React Native': SiReact,
	Electron: SiElectron,
	'AI / OpenAI': SparklesIcon,
	AWS: CloudIcon,
	Cloudflare: SiCloudflare,
}
