import './globals.css'
import { app } from '@/config/config'
import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'

const gothic = Gothic_A1({
	weight: ['300', '400', '600'],
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: app.title,
	description: `${app.company}, a Brazilian software house specialized in developing modern technological solutions`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={gothic.className}>{children}</body>
		</html>
	)
}
