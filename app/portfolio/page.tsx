import Link from 'next/link'

import { BlurFade } from './_components/blur-fade'
import { ProjectCard } from './_components/project-card'
import { ResumeCard } from './_components/resume-card'
import { Section } from './_components/section'
import { resume } from './_data/resume'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const BLUR_FADE_DELAY = 0.04

export default function PortfolioPage() {
	return (
		<div className="flex flex-col min-h-[100dvh] space-y-10">
			{/* Hero + About */}
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8">
					<div className="gap-2 flex justify-between">
						<div className="flex-col flex flex-1 space-y-1.5">
							<BlurFade delay={BLUR_FADE_DELAY}>
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Hi, I&apos;m {resume.name.split(' ')[0]} 👋
								</h1>
							</BlurFade>
							<BlurFade delay={BLUR_FADE_DELAY * 2}>
								<p className="max-w-[600px] md:text-xl">{resume.description}</p>
							</BlurFade>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="size-28 border">
								<AvatarImage alt={resume.name} src={resume.avatarUrl} />
								<AvatarFallback>{resume.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>
			</section>

			<Section heading="About">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
						{resume.summary}
					</p>
				</BlurFade>
			</Section>

			<Section heading="Work Experience">
				{resume.work.map((w, id) => (
					<BlurFade key={w.company + w.title} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
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
			</Section>

			<Section heading="Education">
				{resume.education.map((e, id) => (
					<BlurFade key={e.school} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
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
			</Section>

			<Section heading="Skills">
				<div className="flex flex-wrap gap-1">
					{resume.skills.map((skill, id) => (
						<BlurFade key={skill} delay={BLUR_FADE_DELAY * 9 + id * 0.02}>
							<Badge>{skill}</Badge>
						</BlurFade>
					))}
				</div>
			</Section>

			<Section heading="Projects" id="projects">
				<BlurFade delay={BLUR_FADE_DELAY * 11}>
					<div className="space-y-4">
						<div className="flex flex-col items-center justify-center space-y-2 text-center">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
							<h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">Things I&apos;ve built for fun</h3>
							<p className="text-muted-foreground md:text-lg/relaxed">
								A collection of side projects, tools, and experiments — some shipped publicly, some just scratching my own itch.
							</p>
						</div>
					</div>
				</BlurFade>
				<div className="mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mt-6">
					{resume.projects.map((project, id) => (
						<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
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
			</Section>

			<Section heading="Contact" id="contact">
				<BlurFade delay={BLUR_FADE_DELAY * 16}>
					<div className="flex flex-col items-center justify-center space-y-2 text-center">
						<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
						<h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in touch</h3>
						<p className="text-muted-foreground md:text-lg/relaxed max-w-[600px]">
							Want to chat? Shoot me an email at{' '}
							<Link href={`mailto:${resume.contact.email}`} className="text-blue-500 hover:underline">
								{resume.contact.email}
							</Link>
							.
						</p>
					</div>
				</BlurFade>
			</Section>
		</div>
	)
}
