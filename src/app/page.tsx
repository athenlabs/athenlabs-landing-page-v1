import { app } from '@/config/config'

export default function Home() {
	return (
		<main className="grid place-items-center min-h-screen">
			<div>{app.title}</div>
		</main>
	)
}
