import { posts } from 'app/portfolio/blog/_posts'

const root = 'https://shawnhoffman.dev'

export default function sitemap() {
	return [
		{
			url: `${root}`,
			lastModified: new Date(),
		},
		{
			url: `${root}/llms.txt`,
			lastModified: new Date(),
		},
		{
			url: `${root}/portfolio`,
			lastModified: new Date(),
		},
		{
			url: `${root}/portfolio/blog`,
			lastModified: new Date(),
		},
		...posts.map(post => ({
			url: `${root}/portfolio/blog/${post.slug}`,
			lastModified: new Date(post.publishedAt),
		})),
	]
}
