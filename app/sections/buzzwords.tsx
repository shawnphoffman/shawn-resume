import styles from 'app/Global.module.css'

export default function Buzzwords() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Buzzwords</h2>
			<div className={styles.columnedLists}>
				<ul className={styles.bulletedList}>
					<li>
						<span>JavaScript</span>
						<span>TypeScript</span>
						<span>React</span>
						<span>NextJS</span>
					</li>
					<li>
						<span>Postgres</span>
						<span>SQLite</span>
						<span>Redis</span>
						<span>KV</span>
					</li>
					<li>
						<span>REST</span>
						<span>GraphQL</span>
						<span>OAuth</span>
						<span>OWASP</span>
					</li>
					<li>
						<span>HTML</span>
						<span>CSS</span>
						<span>Tailwind</span>
						<span>shadcn</span>
					</li>
					<li>
						<span>NodeJS</span>
						<span>Docker</span>
						<span>nginx</span>
						<span>Caddy</span>
					</li>
					<li>
						<span>React Native</span>
						<span>Expo</span>
						<span>Electron</span>
						<span>Cloudflare</span>
					</li>
					<li>
						<span>Cloudflare</span>
						<span>S3</span>
						<span>CloudFront</span>
						<span>Azure</span>
					</li>
					<li>
						<span>Webpack</span>
						<span>Jest</span>
						<span>Enzyme</span>
						<span>Storybook</span>
					</li>
					<li>
						<span>Git</span>
						<span>VSCode</span>
						<span>AI</span>
						<span>OpenAI</span>
						<span>Cursor</span>
					</li>
					<li>
						<span>Svelte</span>
						<span>SvelteKit</span>
						<span>Tailwind</span>
						<span>Vite</span>
					</li>
					<li>
						<span>C#</span>
						<span>.NET Core</span>
						<span>.NET Standard</span>
						<span>MVC</span>
					</li>
					<li>
						<span>Framer</span>
						<span>Figma</span>
						<span>Adobe Creative Suite</span>
					</li>
				</ul>
			</div>
		</>
	)
}
