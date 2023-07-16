import { Logo } from '@/assets/icons/Logo'
import Image from 'next/image'
import graphic7 from '@/assets/graphics/graphic-7.webp'
import graphic8 from '@/assets/graphics/graphic-8.webp'
import { socials } from '@/utils/socials'
import clsx from 'clsx'

export const Contact = () => (
	<section className="relative grid place-items-center">
		<div className="z-10 flex flex-col items-center justify-center gap-8 fill-black text-black dark:fill-white dark:text-white">
			<h2 className="text-7xl font-bold">Fale com a gente!</h2>
			<ul className="flex flex-col text-center">
				{Object.entries(socials).map(([key, social], index) => (
					<li
						key={key}
						className={clsx(
							index === Object.entries(socials).length - 1 && 'border-b-2',
							'border-t-2 border-black px-6 py-2 text-2xl dark:border-white'
						)}
					>
						{social}
					</li>
				))}
			</ul>

			<Logo className="h-96 w-96" />
		</div>

		<Image
			src={graphic7}
			alt="Graphic 7"
			className="absolute -left-[750px] -top-[700px] z-0 rotate-90 transition"
		/>

		<Image
			src={graphic8}
			alt="Graphic 8"
			className="absolute -right-[600px] -top-20 z-0 rotate-90 transition"
		/>
	</section>
)
