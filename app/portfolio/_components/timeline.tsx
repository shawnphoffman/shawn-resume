import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface TimelineProps {
	children: ReactNode
	className?: string
}

interface TimelineItemProps {
	children: ReactNode
	className?: string
}

interface TimelineConnectItemProps {
	children: ReactNode
	className?: string
}

export function TimelineConnectItem({ children, className }: TimelineConnectItemProps) {
	return (
		<div className={cn('relative flex shrink-0 justify-center items-center self-stretch', className)}>
			<div
				data-timeline-line
				className="absolute bg-border left-1/2 -translate-x-1/2 top-0 h-[calc(100%+2rem)] w-px"
			/>
			<div className="relative z-20 shrink-0">{children}</div>
		</div>
	)
}

export function TimelineItem({ children, className }: TimelineItemProps) {
	return <div className={cn('relative', className)}>{children}</div>
}

export function Timeline({ children, className }: TimelineProps) {
	return (
		<div className={cn('relative flex flex-col gap-4 w-full [&>*:last-child_[data-timeline-line]]:hidden', className)}>
			<div className="space-y-8 w-full">{children}</div>
		</div>
	)
}
