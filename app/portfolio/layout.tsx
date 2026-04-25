import './portfolio.css'

import { ThemeProvider } from './_components/theme-provider'
import { Nav } from './_components/nav'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { TooltipProvider } from '@/components/ui/tooltip'

export const metadata = {
	title: 'Shawn Hoffman — Portfolio',
	description: 'Portfolio of Shawn Hoffman — software engineer, independent contractor, and side-project enthusiast.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
			<div className="portfolio-root relative min-h-screen">
				<div className="pointer-events-none absolute inset-x-0 top-0 h-[100px] overflow-hidden z-0">
					<FlickeringGrid
						className="h-full w-full"
						squareSize={2}
						gridGap={2}
						style={{
							maskImage: 'linear-gradient(to bottom, black, transparent)',
							WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
						}}
					/>
				</div>
				<TooltipProvider delayDuration={0}>
					<div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 sm:pb-24 px-6">{children}</div>
					<Nav />
				</TooltipProvider>
			</div>
		</ThemeProvider>
	)
}
