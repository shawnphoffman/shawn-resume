import { NextResponse, type NextRequest } from 'next/server'

const BOT_UA =
	/(googlebot|bingbot|duckduckbot|baiduspider|yandex|applebot(-extended)?|gptbot|chatgpt-user|oai-searchbot|claudebot|claude-web|anthropic-ai|perplexitybot|perplexity-user|ccbot|google-extended|meta-externalagent|bytespider|amazonbot|youbot|cohere-ai|diffbot)/i

export function proxy(req: NextRequest) {
	if (req.nextUrl.pathname !== '/') return NextResponse.next()
	const ua = req.headers.get('user-agent') ?? ''
	if (!BOT_UA.test(ua)) return NextResponse.next()
	const url = req.nextUrl.clone()
	url.pathname = '/bot'
	return NextResponse.rewrite(url)
}

export const config = {
	matcher: ['/((?!_next/|api/|bot|llms.txt|robots.txt|sitemap.xml|favicon|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|mp4|css|js|map|txt|xml)).*)'],
}
