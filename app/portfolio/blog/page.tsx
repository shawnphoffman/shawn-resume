import Link from 'next/link'

import { BlurFade } from '../_components/blur-fade'
import { posts } from './_posts'

const BLUR_FADE_DELAY = 0.04

export const metadata = {
	title: 'Blog — Shawn Hoffman',
	description: 'Posts on software engineering, side projects, and whatever else catches my attention.',
}

export default function BlogIndexPage() {
	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
			</BlurFade>
			{posts
				.slice()
				.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
				.map((post, id) => (
					<BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
						<Link className="flex flex-col space-y-1 mb-4" href={`/portfolio/blog/${post.slug}`}>
							<div className="w-full flex flex-col">
								<p className="tracking-tight">{post.title}</p>
								<p className="h-6 text-xs text-muted-foreground">{post.publishedAt}</p>
								<p className="text-sm text-muted-foreground mt-1">{post.summary}</p>
							</div>
						</Link>
					</BlurFade>
				))}
		</section>
	)
}
