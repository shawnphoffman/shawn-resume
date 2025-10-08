import styles from 'app/Global.module.css'

export default function Buzzwords() {
	return (
		<>
			<h2 className={styles.sectionHeader}>Buzzwords</h2>
			<div className={styles.columnedLists}>
				<ul className={styles.bulletedList}>
					<li>JavaScript / TypeScript / React / NextJS</li>
					<li>Webpack / Jest / Enzyme / Storybook</li>
					<li>C# / .NET Core / .NET Standard / MVC</li>
				</ul>
				<ul className={styles.bulletedList}>
					<li>Postgres / MSSQL / PL-SQL / MySQL</li>
					<li>AWS / S3 / CloudFront / Azure / nginx</li>
					<li>REST / JWT / OAUTH / SOAP / Postman</li>
				</ul>
				<ul className={styles.bulletedList}>
					<li>Node / Electron / Docker / Kubernetes</li>
					<li>ElasticSearch / Kibana / Logstash</li>
					<li>Git / TFVC / GitHub / TFS / ClearCase</li>
				</ul>
			</div>
		</>
	)
}
