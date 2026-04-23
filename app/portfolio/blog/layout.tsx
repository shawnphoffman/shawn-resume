export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<article className="prose prose-neutral dark:prose-invert max-w-none">
			<style>{`
				.prose h1 { font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: -0.015em; }
				.prose h2 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; }
				.prose h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; }
				.prose p { margin-top: 0.75rem; margin-bottom: 0.75rem; line-height: 1.7; }
				.prose ul { list-style: disc; padding-left: 1.25rem; margin: 0.75rem 0; }
				.prose ol { list-style: decimal; padding-left: 1.25rem; margin: 0.75rem 0; }
				.prose li { margin: 0.25rem 0; }
				.prose a { color: rgb(59 130 246); text-decoration: underline; text-underline-offset: 2px; }
				.prose code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; background: hsl(var(--muted)); padding: 0.1rem 0.3rem; border-radius: 0.25rem; font-size: 0.875em; }
				.prose pre { background: hsl(var(--muted)); padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1rem 0; }
				.prose pre code { background: transparent; padding: 0; }
				.prose hr { border-color: hsl(var(--border)); margin: 2rem 0; }
				.prose blockquote { border-left: 3px solid hsl(var(--border)); padding-left: 1rem; color: hsl(var(--muted-foreground)); margin: 1rem 0; }
			`}</style>
			{children}
		</article>
	)
}
