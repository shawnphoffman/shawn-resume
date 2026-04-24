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
			<div className="portfolio-root relative min-h-screen">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 h-[500px] z-0"
					style={{
						backgroundImage: 'radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1.2px)',
						backgroundSize: '20px 20px',
						opacity: 0.4,
						maskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
						WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
					}}
				/>
				<TooltipProvider delayDuration={0}>
					<div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">{children}</div>
					<Nav />
				</TooltipProvider>
			</div>
		</ThemeProvider>
	)
}
