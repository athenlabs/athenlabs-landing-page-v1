import './globals.css'
import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'
import { app } from '@/config/config'

const gothic = Gothic_A1({
	weight: ['300', '400', '600', '700'],
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: app.company,
	description: `${app.company} is a software house specialised in the development of technological solutions aimed at customers or companies from the most diverse segments`,
	applicationName: `${app.company} Website`,
	authors: [
		{ name: `${app.company} Team`, url: 'https://github.com/orgs/athenlabs/teams/athenlabs-tech' }
	],
	generator: 'Next.js',
	keywords: 'information,information systems,development,marketing,ui,ux,web design,software',
	referrer: 'origin',
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#222221' },
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' }
	],
	colorScheme: 'dark light',
	viewport: 'width=device-width, initial-scale=1.0',
	creator: `${app.company} Team`,
	publisher: 'Vercel',
	robots: 'index, follow',
	// icons: [{ rel: "icon", url: "https://example.com/icon.png" }, { rel: "apple-touch-icon", url: "https://example.com/apple-icon.png" }],
	// manifest: '',
	// openGraph: {
	// 	type: 'website',
	// 	url: 'https://example.com',
	// 	title: 'My Website',
	// 	description: 'My Website Description',
	// 	siteName: 'My Website',
	// 	images: [
	// 		{
	// 			url: 'https://example.com/og.png'
	// 		}
	// 	]
	// },
	// twitter: {
	// 	card: 'summary_large_image',
	// 	site: '@site',
	// 	creator: '@creator',
	// 	images: 'https://example.com/og.png'
	// },
	// verification: { google: '1234567890', yandex: '1234567890', me: '1234567890' },
	formatDetection: { telephone: false, email: false, address: false, date: false, url: false },
	abstract: `${app.company} is an organization dedicated to turning innovative ideas into high-performance software products and technological solutions. We combine a passion for technology with the expertise of our talented team to deliver exceptional software projects. We are committed to providing customized and efficient solutions for companies across various industries`,
	category: 'IT Services and IT Consulting'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={gothic.className}>{children}</body>
		</html>
	)
}
