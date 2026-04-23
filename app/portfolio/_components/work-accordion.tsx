'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { resume } from '../_data/resume'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

function LogoImage({ src, alt }: { src?: string; alt: string }) {
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

export function WorkAccordion() {
	return (
		<Accordion type="single" collapsible className="w-full grid gap-6">
			{resume.work.map(work => (
				<AccordionItem key={work.company + work.title} value={work.company + work.title} className="w-full border-b-0 grid gap-2">
					<AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
						<div className="flex items-center gap-x-3 justify-between w-full text-left">
							<div className="flex items-center gap-x-3 flex-1 min-w-0">
								<LogoImage src={work.logoUrl} alt={work.company} />
								<div className="flex-1 min-w-0 gap-0.5 flex flex-col">
									<div className="font-semibold leading-none flex items-center gap-2 text-sm">
										{work.company}
										{work.badges && work.badges.length > 0 ? (
											<span className="inline-flex gap-x-1 flex-wrap">
												{work.badges.map((b, i) => (
													<Badge variant="secondary" className="align-middle text-[10px] px-1.5 py-0" key={`${b}-${i}`}>
														{b}
													</Badge>
												))}
											</span>
										) : null}
										<span className="relative inline-flex items-center w-3.5 h-3.5">
											<ChevronRight
												className={cn(
													'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out',
													'translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100',
													'group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0'
												)}
											/>
											<ChevronDown
												className={cn(
													'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200',
													'opacity-0 rotate-0',
													'group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180'
												)}
											/>
										</span>
									</div>
									<div className="font-sans text-sm text-muted-foreground">{work.title}</div>
								</div>
							</div>
							<div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
								<span>
									{work.start} - {work.end}
								</span>
							</div>
						</div>
					</AccordionTrigger>
					<AccordionContent className="p-0 ml-11 md:ml-13 text-xs sm:text-sm text-muted-foreground">
						{work.description}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
