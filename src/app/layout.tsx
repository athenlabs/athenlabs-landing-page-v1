import './globals.css'
import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'
import { app } from '@/config/config'
import clsx from 'clsx'

const gothic = Gothic_A1({
	weight: ['300', '400', '600', '700'],
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: app.title,
	description: `${app.company}, a Brazilian software house specialized in developing modern technological solutions`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark">
			<body className={clsx(gothic.className, 'bg-slate-50 dark:bg-black')}>{children}</body>
		</html>
	)
}
