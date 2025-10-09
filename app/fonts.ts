import { Bungee_Inline, Open_Sans } from 'next/font/google'

export const openSans = Open_Sans({ subsets: ['latin'], style: ['normal'], display: 'swap', preload: true })

export const bungeeInline = Bungee_Inline({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-bungee',
	preload: true,
	display: 'swap',
})
