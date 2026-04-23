import Link from 'next/link'

import { BlurFade } from './_components/blur-fade'
import { ProjectCard } from './_components/project-card'
import { ResumeCard } from './_components/resume-card'
import { Section } from './_components/section'
import { resume } from './_data/resume'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const BLUR_FADE_DELAY = 0.04

export default function PortfolioPage() {
	return (
		<main className="flex flex-col gap-14 relative min-h-dvh">
			{/* Hero */}
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8">
					<div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
						<div className="gap-2 flex flex-col order-2 md:order-1">
							<BlurFade delay={BLUR_FADE_DELAY}>
								<h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
									Hi, I&apos;m {resume.name.split(' ')[0]}
								</h1>
							</BlurFade>
							<BlurFade delay={BLUR_FADE_DELAY * 2}>
								<p className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl">{resume.description}</p>
							</BlurFade>
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
						<p className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
							{resume.summary}
						</p>
					</BlurFade>
				</div>
			</section>

			{/* Work */}
			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-6">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="text-xl font-bold">Work Experience</h2>
					</BlurFade>
					<div className="flex flex-col gap-6">
						{resume.work.map((w, id) => (
							<BlurFade key={w.company + w.title} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
								<ResumeCard
									logoUrl={w.logoUrl}
									altText={w.company}
									title={w.company}
									subtitle={w.title}
									href={w.href}
									badges={w.badges}
									period={`${w.start} - ${w.end}`}
									description={w.description}
								/>
							</BlurFade>
						))}
					</div>
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
						{resume.skills.map((skill, id) => (
							<BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.03}>
								<div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
									<span className="text-foreground text-sm font-medium">{skill}</span>
								</div>
							</BlurFade>
						))}
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
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
									Things I&apos;ve built for fun
								</h2>
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
			<section id="volunteering">
				<div className="flex min-h-0 flex-col gap-y-6">
					<BlurFade delay={BLUR_FADE_DELAY * 13}>
						<h2 className="text-xl font-bold">Volunteering</h2>
					</BlurFade>
					<div className="flex flex-col gap-6">
						{resume.volunteering.map((v, id) => (
							<BlurFade key={v.organization} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
								<ResumeCard
									logoUrl={v.logoUrl}
									altText={v.organization}
									title={v.organization}
									subtitle={v.role}
									href={v.href}
									badges={v.badges}
									period={v.start || v.end ? `${v.start} - ${v.end}` : ''}
									description={v.description}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact">
				<BlurFade delay={BLUR_FADE_DELAY * 16}>
					<div className="border rounded-xl p-10 relative">
						<div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
							<span className="text-background text-sm font-medium">Contact</span>
						</div>
						<div className="relative flex flex-col items-center gap-4 text-center">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
							<p className="mx-auto max-w-lg text-muted-foreground text-balance">
								Want to chat? Shoot me an email at{' '}
								<Link
									href={`mailto:${resume.contact.email}`}
									className="text-blue-500 hover:underline underline-offset-4"
								>
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
