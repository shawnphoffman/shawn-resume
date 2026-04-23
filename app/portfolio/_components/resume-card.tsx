'use client'

import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader } from '@/components/ui/card'
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

export function ResumeCard({ logoUrl, altText, title, subtitle, href, badges, period, description }: ResumeCardProps) {
	const [isExpanded, setIsExpanded] = React.useState(false)

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (description) {
			e.preventDefault()
			setIsExpanded(!isExpanded)
		}
	}

	return (
		<Link href={href ?? '#'} className="block cursor-pointer" onClick={handleClick}>
			<Card className="flex">
				<div className="flex-none">
					<Avatar className="m-auto size-12 border bg-muted ml-4 mt-4">
						{logoUrl ? <AvatarImage src={logoUrl} alt={altText} className="object-contain" /> : null}
						<AvatarFallback>{altText[0]}</AvatarFallback>
					</Avatar>
				</div>
				<div className="flex-grow ml-4 items-center flex-col group">
					<CardHeader className="p-4">
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
								{title}
								{badges && badges.length > 0 ? (
									<span className="inline-flex gap-x-1">
										{badges.map((badge, i) => (
											<Badge variant="secondary" className="align-middle text-xs ml-2" key={`${badge}-${i}`}>
												{badge}
											</Badge>
										))}
									</span>
								) : null}
								{description ? (
									<ChevronRightIcon
										className={cn(
											'size-4 translate-x-0 transform opacity-50 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
											isExpanded ? 'rotate-90' : 'rotate-0'
										)}
									/>
								) : null}
							</h3>
							<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{period}</div>
						</div>
						{subtitle ? <div className="font-sans text-xs">{subtitle}</div> : null}
					</CardHeader>
					{description ? (
						<div
							className={cn(
								'mt-2 text-xs sm:text-sm ml-4 mr-4 overflow-hidden transition-all duration-300 ease-out',
								isExpanded ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
							)}
						>
							{description}
						</div>
					) : null}
				</div>
			</Card>
		</Link>
	)
}
