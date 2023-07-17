import 'styles/sanitize.css'
import 'styles/globals.css'

import Script from 'next/script'

import { bungeeInline, openSans } from 'app/fonts'

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

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${openSans.className} ${bungeeInline.variable}`}>
			<head>
				<Script src="https://kit.fontawesome.com/94ef14ccff.js" strategy="afterInteractive" rel="preload" as="font" />
			</head>
			<body className="theme-dark">
				<div>{children}</div>
			</body>
		</html>
	)
}
