'use client'

import Link from 'next/link'
import { HomeIcon, NotebookIcon } from 'lucide-react'

import { ModeToggle } from './mode-toggle'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { resume } from '../_data/resume'

export function Nav() {
	const navItems = [
		{ href: '/portfolio', icon: HomeIcon, label: 'Home' },
		{ href: '/portfolio/blog', icon: NotebookIcon, label: 'Blog' },
	]

	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
			<div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"></div>
			<TooltipProvider>
				<nav className="pointer-events-auto mx-auto flex h-full items-center gap-x-1 rounded-full border bg-background p-1.5 px-2 shadow-md">
					{navItems.map(({ href, icon: Icon, label }) => (
						<Tooltip key={href}>
							<TooltipTrigger asChild>
								<Link
									href={href}
									className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-10 rounded-full')}
								>
									<Icon className="size-4" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>{label}</p>
							</TooltipContent>
						</Tooltip>
					))}
					<div className="mx-1 h-6 w-px bg-border" />
					{Object.entries(resume.contact.social)
						.filter(([, s]) => s.navbar)
						.map(([key, social]) => (
							<Tooltip key={key}>
								<TooltipTrigger asChild>
									<Link
										href={social.url}
										target="_blank"
										rel="noreferrer"
										className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-10 rounded-full')}
									>
										{social.icon}
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{social.name}</p>
								</TooltipContent>
							</Tooltip>
						))}
					<div className="mx-1 h-6 w-px bg-border" />
					<Tooltip>
						<TooltipTrigger asChild>
							<span>
								<ModeToggle />
							</span>
						</TooltipTrigger>
						<TooltipContent>
							<p>Toggle theme</p>
						</TooltipContent>
					</Tooltip>
				</nav>
			</TooltipProvider>
		</div>
	)
}
