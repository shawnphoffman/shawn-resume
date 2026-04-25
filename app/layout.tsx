import 'styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'yet-another-react-lightbox/styles.css'

import { Analytics } from '@vercel/analytics/react'

import { bungeeInline, inter, openSans } from 'app/fonts'
import { buildPersonJsonLd } from 'app/json-ld'

export const metadata = {
	title: 'Shawn Hoffman - Resume',
	description: 'Web app resume for Shawn Hoffman',
	metadataBase: 'https://shawnhoffman.dev',
	openGraph: {
		title: 'Shawn Hoffman - Resume',
		description: 'Web app resume for Shawn Hoffman',
		url: 'https://shawnhoffman.dev',
		locale: 'en_US',
		type: 'website',
	},
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	const personJsonLd = buildPersonJsonLd()
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${openSans.className} ${bungeeInline.variable} ${inter.variable} dark`}
			style={{ colorScheme: 'dark' }}
		>
			<body className="theme-dark">
				<div>{children}</div>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
				<Analytics />
			</body>
		</html>
	)
}
