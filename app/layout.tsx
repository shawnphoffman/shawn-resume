import 'styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'yet-another-react-lightbox/styles.css'

import { Analytics } from '@vercel/analytics/react'

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
			<body className="theme-dark">
				<div>{children}</div>
				<Analytics />
			</body>
		</html>
	)
}
