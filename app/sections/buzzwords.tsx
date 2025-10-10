import styles from 'app/Global.module.css'

export default function Buzzwords() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Buzzwords</h2>
			<div className={styles.columnedLists}>
				<ul className={styles.bulletedList}>
					<li>JavaScript / TypeScript / React / NextJS</li>
					<li>Postgres / SQLite / Redis / KV</li>
					<li>REST / GraphQL / OAuth / OWASP</li>
					<li>HTML / CSS / Tailwind / shadcn</li>
				</ul>
				<ul className={styles.bulletedList}>
					<li>NodeJS / Docker / nginx / Caddy</li>
					<li>React Native / Expo / Electron</li>
					<li>Cloudflare / S3 / CloudFront / Azure</li>
					<li>Webpack / Jest / Enzyme / Storybook</li>
				</ul>
				<ul className={styles.bulletedList}>
					<li>Git / VSCode / AI / OpenAI / Cursor</li>
					<li>Svelte / SvelteKit / Tailwind / Vite </li>
					<li>C# / .NET Core / .NET Standard / MVC</li>
					<li>Framer / Figma / Adobe Creative Suite</li>
				</ul>
			</div>
		</>
	)
}
