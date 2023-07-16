import { randomUUID } from 'crypto'
import { app } from '@/config/config'

export const WeDo = () => {
	const services = [
		'Software Development',
		'Technology Consulting',
		'UX/UI Design',
		'Maintenance and Support'
	]
	return (
		<section className="relative flex w-full flex-col items-center justify-center p-6">
			{/* <Image src={graphic4} width={1000} alt="Graphic 4" className="z-0" /> */}

			<div className="z-10 ml-12 flex w-full items-center justify-center gap-48 text-black dark:text-white">
				<h2 className="max-w-sm text-7xl font-bold">What {app.title} could do for you:</h2>

				<ul className="flex flex-col gap-4">
					{services.map((service) => (
						<li key={randomUUID()} className="list-disc text-2xl font-semibold">
							{service}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
