import 'styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
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

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={`${openSans.className} ${bungeeInline.variable}`}>
			<head>
				<Script src="https://kit.fontawesome.com/94ef14ccff.js" strategy="afterInteractive" />
			</head>
			<body className="theme-dark">
				<div>{children}</div>
				<Analytics />
			</body>
		</html>
	)
}
