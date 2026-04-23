import './portfolio.css'

import { ThemeProvider } from './_components/theme-provider'
import { Nav } from './_components/nav'
import { TooltipProvider } from '@/components/ui/tooltip'

export const metadata = {
	title: 'Shawn Hoffman — Portfolio',
	description: 'Portfolio of Shawn Hoffman — software engineer, independent contractor, and side-project enthusiast.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
			<div className="portfolio-root min-h-screen">
				<TooltipProvider delayDuration={0}>
					<main className="max-w-2xl mx-auto py-12 sm:py-24 px-6">{children}</main>
					<Nav />
				</TooltipProvider>
			</div>
		</ThemeProvider>
	)
}
