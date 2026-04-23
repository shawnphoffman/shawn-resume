export interface PostMeta {
	slug: string
	title: string
	summary: string
	publishedAt: string
}

/**
 * Registry of blog posts. Each entry has a matching MDX page at
 * `app/portfolio/blog/<slug>/page.mdx`. Keep this list in reverse-chronological
 * order.
 */
export const posts: PostMeta[] = [
	{
		slug: 'hello-world',
		title: 'Hello, world',
		summary: "A quick intro to why this blog exists and what I'm planning to write about.",
		publishedAt: '2026-04-23',
	},
]
