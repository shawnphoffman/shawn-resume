'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import * as React from 'react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
	title: string
	href?: string
	description: string
	dates?: string
	tags: readonly string[]
	link?: string
	image?: string | StaticImageData
	video?: string
	links?: { icon: React.ReactNode; type: string; href: string }[]
	className?: string
}

function ProjectMedia({ image, video, title }: Pick<ProjectCardProps, 'image' | 'video' | 'title'>) {
	if (video) {
		return <video src={video} autoPlay loop muted playsInline className="w-full h-48 object-cover" />
	}
	if (image) {
		return (
			<Image
				src={image}
				alt={title}
				className="w-full h-48 object-cover"
				width={typeof image === 'string' ? 800 : undefined}
				height={typeof image === 'string' ? 400 : undefined}
				placeholder={typeof image === 'string' ? 'empty' : 'blur'}
			/>
		)
	}
	return <div className="w-full h-48 bg-muted" />
}

export function ProjectCard({ title, href, description, dates, tags, image, video, links, className }: ProjectCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200',
				href ? 'cursor-pointer' : '',
				className
			)}
		>
			<div className="relative shrink-0">
				{href ? (
					<Link href={href} target="_blank" rel="noopener noreferrer" className="block">
						<ProjectMedia image={image} video={video} title={title} />
					</Link>
				) : (
					<div className="block">
						<ProjectMedia image={image} video={video} title={title} />
					</div>
				)}
				{links && links.length > 0 ? (
					<div className="absolute top-2 right-2 flex flex-wrap gap-2">
						{links.map((link, idx) => (
							<Link
								href={link.href}
								key={idx}
								target="_blank"
								rel="noopener noreferrer"
								onClick={e => e.stopPropagation()}
							>
								<Badge
									className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
									variant="default"
								>
									{link.icon}
									{link.type}
								</Badge>
							</Link>
						))}
					</div>
				) : null}
			</div>
			<div className="p-6 flex flex-col gap-3 flex-1">
				<div className="flex items-start justify-between gap-2">
					<div className="flex flex-col gap-1">
						<h3 className="font-semibold">{title}</h3>
						{dates ? <time className="text-xs text-muted-foreground">{dates}</time> : null}
					</div>
					{href ? (
						<Link
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors rounded-sm"
							aria-label={`Open ${title}`}
						>
							<ArrowUpRight className="h-4 w-4" aria-hidden />
						</Link>
					) : null}
				</div>
				<p className="text-xs flex-1 font-sans leading-relaxed text-muted-foreground">{description}</p>
				{tags && tags.length > 0 ? (
					<div className="flex flex-wrap gap-1 mt-auto">
						{tags.map(tag => (
							<Badge key={tag} className="text-[11px] font-medium border border-border h-6 w-fit px-2" variant="outline">
								{tag}
							</Badge>
						))}
					</div>
				) : null}
			</div>
		</div>
	)
}
