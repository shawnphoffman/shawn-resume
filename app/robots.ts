import type { MetadataRoute } from 'next'

const root = 'https://shawnhoffman.dev'

const aiCrawlers = [
	'GPTBot',
	'ChatGPT-User',
	'OAI-SearchBot',
	'ClaudeBot',
	'Claude-Web',
	'anthropic-ai',
	'PerplexityBot',
	'Perplexity-User',
	'CCBot',
	'Google-Extended',
	'Applebot-Extended',
	'meta-externalagent',
	'Bytespider',
	'Amazonbot',
	'YouBot',
	'cohere-ai',
	'Diffbot',
]

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: aiCrawlers, allow: ['/', '/llms.txt'] },
		],
		sitemap: `${root}/sitemap.xml`,
		host: root,
	}
}
