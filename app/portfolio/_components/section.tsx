import { cn } from '@/lib/utils'

interface SectionProps {
	id?: string
	heading: string
	children: React.ReactNode
	className?: string
}

export function Section({ id, heading, children, className }: SectionProps) {
	return (
		<section id={id} className={cn('flex min-h-0 flex-col gap-y-3', className)}>
			<h2 className="text-xl font-bold">{heading}</h2>
			{children}
		</section>
	)
}
