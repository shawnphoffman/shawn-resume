'use client'

import { HomeIcon, MoonIcon, NotebookIcon, SunIcon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { resume } from '../_data/resume'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

const navItems = [
	{ href: '/portfolio', icon: HomeIcon, label: 'Home' },
	{ href: '/portfolio/blog', icon: NotebookIcon, label: 'Blog' },
]

const iconButtonClass =
	'flex items-center justify-center rounded-full size-full text-muted-foreground hover:text-foreground transition-colors'

function ThemeToggleButton() {
	const { resolvedTheme, setTheme } = useTheme()
	return (
		<button
			type="button"
			aria-label="Toggle theme"
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			className={iconButtonClass}
		>
			<SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</button>
	)
}

export function Nav() {
	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center">
			<TooltipProvider>
				<Dock className="pointer-events-auto relative z-50 h-[58px] px-2 py-2 gap-2 bg-card/90 backdrop-blur-md shadow-[0_0_10px_3px] shadow-primary/5">
					{navItems.map(item => (
						<DockIcon key={item.href}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link href={item.href} aria-label={item.label} className={cn(iconButtonClass)}>
										<item.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent
									side="top"
									sideOffset={8}
									className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
								>
									<p>{item.label}</p>
									<TooltipArrow className="fill-primary" />
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
					{Object.entries(resume.contact.social)
						.filter(([, s]) => s.navbar)
						.map(([key, social]) => (
							<DockIcon key={key}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link href={social.url} target="_blank" rel="noreferrer" aria-label={social.name} className={cn(iconButtonClass)}>
											{social.icon}
										</Link>
									</TooltipTrigger>
									<TooltipContent
										side="top"
										sideOffset={8}
										className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
									>
										<p>{social.name}</p>
										<TooltipArrow className="fill-primary" />
									</TooltipContent>
								</Tooltip>
							</DockIcon>
						))}
					<Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<ThemeToggleButton />
							</TooltipTrigger>
							<TooltipContent
								side="top"
								sideOffset={8}
								className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
							>
								<p>Theme</p>
								<TooltipArrow className="fill-primary" />
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				</Dock>
			</TooltipProvider>
		</div>
	)
}
