import Link from 'next/link'
import Markdown from 'react-markdown'

import { BlurFade } from './_components/blur-fade'
import { ProjectCard } from './_components/project-card'
import { ResumeCard } from './_components/resume-card'
import { skillIcons } from './_components/skill-icons'
import { Timeline, TimelineConnectItem, TimelineItem } from './_components/timeline'
import { WorkAccordion } from './_components/work-accordion'
import { resume } from './_data/resume'
import { BlurFadeText } from '@/components/magicui/blur-fade-text'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const BLUR_FADE_DELAY = 0.04

export default function PortfolioPage() {
	return (
		<main className="flex flex-col gap-14 relative min-h-dvh">
			{/* Hero */}
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8">
					<div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
						<div className="gap-2 flex flex-col order-2 md:order-1">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
								yOffset={8}
								text={`Hi, I'm ${resume.name.split(' ')[0]}`}
							/>
							<BlurFadeText
								className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
								delay={BLUR_FADE_DELAY}
								text={resume.description}
							/>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
							<Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
								<AvatarImage alt={resume.name} src={resume.avatarUrl} />
								<AvatarFallback>{resume.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about">
				<div className="flex min-h-0 flex-col gap-y-4">
					<BlurFade delay={BLUR_FADE_DELAY * 3}>
						<h2 className="text-xl font-bold">About</h2>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 4}>
						<div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
							<Markdown>{resume.summary}</Markdown>
						</div>
					</BlurFade>
				</div>
			</section>

			{/* Work */}
			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-6">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="text-xl font-bold">Work Experience</h2>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 6}>
						<WorkAccordion />
					</BlurFade>
				</div>
			</section>

			{/* Education */}
			<section id="education">
				<div className="flex min-h-0 flex-col gap-y-6">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="text-xl font-bold">Education</h2>
					</BlurFade>
					<div className="flex flex-col gap-6">
						{resume.education.map((e, id) => (
							<BlurFade key={e.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
								<ResumeCard
									logoUrl={e.logoUrl}
									altText={e.school}
									title={e.school}
									subtitle={e.degree}
									href={e.href}
									period={e.start || e.end ? `${e.start} - ${e.end}` : ''}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>

			{/* Skills */}
			<section id="skills">
				<div className="flex min-h-0 flex-col gap-y-4">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Skills</h2>
					</BlurFade>
					<div className="flex flex-wrap gap-2">
						{resume.skills.map((skill, id) => {
							const Icon = skillIcons[skill]
							return (
								<BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.03}>
									<div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
										{Icon ? <Icon className="size-4" /> : null}
										<span className="text-foreground text-sm font-medium">{skill}</span>
									</div>
								</BlurFade>
							)
						})}
					</div>
				</div>
			</section>

			{/* Projects */}
			<section id="projects">
				<BlurFade delay={BLUR_FADE_DELAY * 11}>
					<div className="flex min-h-0 flex-col gap-y-8">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<div className="flex items-center w-full">
								<div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
								<div className="border bg-primary z-10 rounded-xl px-4 py-1 mx-2">
									<span className="text-background text-sm font-medium">My Projects</span>
								</div>
								<div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
							</div>
							<div className="flex flex-col gap-y-3 items-center justify-center">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Things I&apos;ve built for fun</h2>
								<p className="text-muted-foreground md:text-lg/relaxed text-balance text-center max-w-[600px]">
									A collection of side projects, tools, and experiments — some shipped publicly, some just scratching my own itch.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
							{resume.projects.map((project, id) => (
								<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05} className="h-full">
									<ProjectCard
										href={project.href}
										title={project.title}
										description={project.description}
										dates={project.dates}
										tags={project.technologies}
										image={project.image}
										video={project.video}
										links={project.links}
									/>
								</BlurFade>
							))}
						</div>
					</div>
				</BlurFade>
			</section>

			{/* Volunteering */}
			<section id="volunteering" className="overflow-hidden">
				<BlurFade delay={BLUR_FADE_DELAY * 13}>
					<div className="flex min-h-0 flex-col gap-y-8 w-full">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<div className="flex items-center w-full">
								<div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
								<div className="border bg-primary z-10 rounded-xl px-4 py-1 mx-2">
									<span className="text-background text-sm font-medium">Volunteering</span>
								</div>
								<div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
							</div>
							<div className="flex flex-col gap-y-3 items-center justify-center">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Giving back when I can</h2>
								<p className="text-muted-foreground md:text-lg/relaxed text-balance text-center max-w-[600px]">
									A handful of organizations and causes I&apos;ve donated time to over the years.
								</p>
							</div>
						</div>
						<Timeline>
							{resume.volunteering.map(v => {
								const dateLine = [v.start, v.end].filter(Boolean).join(' - ')
								return (
									<TimelineItem key={v.organization} className="w-full flex items-start justify-between gap-6">
										<TimelineConnectItem className="flex items-start justify-center">
											<div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none flex items-center justify-center text-xs font-medium text-muted-foreground">
												{v.organization[0]}
											</div>
										</TimelineConnectItem>
										<div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
											{dateLine ? <time className="text-xs text-muted-foreground">{dateLine}</time> : null}
											<h3 className="font-semibold leading-none">{v.organization}</h3>
											<p className="text-sm text-muted-foreground">{v.role}</p>
											<p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
											<div className="flex flex-wrap items-center gap-2 pt-1">
												{v.badges?.map(badge => (
													<Badge key={badge} className="text-[10px] font-medium border border-border h-6 w-fit px-2" variant="outline">
														{badge}
													</Badge>
												))}
												{v.href ? (
													<Link href={v.href} target="_blank" rel="noopener noreferrer">
														<Badge className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90" variant="default">
															Learn more
														</Badge>
													</Link>
												) : null}
											</div>
										</div>
									</TimelineItem>
								)
							})}
						</Timeline>
					</div>
				</BlurFade>
			</section>

			{/* Contact */}
			<section id="contact">
				<BlurFade delay={BLUR_FADE_DELAY * 16}>
					<div className="border rounded-xl p-10 relative overflow-hidden">
						<div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
							<span className="text-background text-sm font-medium">Contact</span>
						</div>
						<div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
							<FlickeringGrid
								className="h-full w-full"
								squareSize={2}
								gridGap={2}
								style={{
									maskImage: 'linear-gradient(to bottom, black, transparent)',
									WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
								}}
							/>
						</div>
						<div className="relative flex flex-col items-center gap-4 text-center">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
							<p className="mx-auto max-w-lg text-muted-foreground text-balance">
								Want to chat? Shoot me an email at{' '}
								<Link href={`mailto:${resume.contact.email}`} className="text-blue-500 hover:underline underline-offset-4">
									{resume.contact.email}
								</Link>
								. I&apos;ll respond when I can.
							</p>
						</div>
					</div>
				</BlurFade>
			</section>
		</main>
	)
}
