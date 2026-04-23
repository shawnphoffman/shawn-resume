'use client'

import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react'
import * as React from 'react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ResumeCardProps {
	logoUrl?: string
	altText: string
	title: string
	subtitle?: string
	href?: string
	badges?: string[]
	period: string
	description?: string
}

function Logo({ src, alt }: { src?: string; alt: string }) {
	const [errored, setErrored] = React.useState(false)
	if (!src || errored) {
		return (
			<div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center text-xs font-medium text-muted-foreground">
				{alt[0]}
			</div>
		)
	}
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={src}
			alt={alt}
			className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
			onError={() => setErrored(true)}
		/>
	)
}

export function ResumeCard({ logoUrl, altText, title, subtitle, href, badges, period, description }: ResumeCardProps) {
	const [isExpanded, setIsExpanded] = React.useState(false)
	const expandable = Boolean(description)

	const header = (
		<div className="flex items-center gap-x-3 justify-between w-full text-left">
			<div className="flex items-center gap-x-3 flex-1 min-w-0">
				<Logo src={logoUrl} alt={altText} />
				<div className="flex-1 min-w-0 gap-0.5 flex flex-col">
					<div className="font-semibold leading-none flex items-center gap-2 text-sm">
						{title}
						{badges && badges.length > 0 ? (
							<span className="inline-flex gap-x-1">
								{badges.map((badge, i) => (
									<Badge variant="secondary" className="align-middle text-[10px] px-1.5 py-0" key={`${badge}-${i}`}>
										{badge}
									</Badge>
								))}
							</span>
						) : null}
						{expandable ? (
							<span className="relative inline-flex items-center w-3.5 h-3.5">
								<ChevronRightIcon
									className={cn(
										'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out',
										isExpanded ? 'opacity-0 translate-x-0' : 'opacity-50 group-hover:opacity-100 group-hover:translate-x-1'
									)}
								/>
								<ChevronDownIcon
									className={cn(
										'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200',
										isExpanded ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
									)}
								/>
							</span>
						) : null}
					</div>
					{subtitle ? <div className="font-sans text-sm text-muted-foreground">{subtitle}</div> : null}
				</div>
			</div>
			<div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
				<span>{period}</span>
			</div>
		</div>
	)

	return (
		<div className="group w-full grid gap-2">
			{expandable ? (
				<button
					type="button"
					onClick={() => setIsExpanded(v => !v)}
					aria-expanded={isExpanded}
					className="w-full text-left cursor-pointer"
				>
					{header}
				</button>
			) : href ? (
				<a href={href} target="_blank" rel="noopener noreferrer" className="w-full block">
					{header}
				</a>
			) : (
				<div className="w-full">{header}</div>
			)}
			{expandable ? (
				<div
					className={cn(
						'ml-11 md:ml-13 overflow-hidden transition-all duration-300 ease-out text-xs sm:text-sm text-muted-foreground',
						isExpanded ? 'max-h-64 opacity-100 pt-1' : 'max-h-0 opacity-0'
					)}
				>
					{description}
				</div>
			) : null}
		</div>
	)
}
