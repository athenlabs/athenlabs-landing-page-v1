import Image from 'next/image'
import graphic5 from '@/assets/graphics/graphic-5.webp'

export const AboutUs = () => (
	<section className="relative flex items-center p-6 text-black dark:text-white">
		<article className="flex max-w-6xl flex-col gap-6 xl:ml-12">
			<h2 className="text-xl font-bold md:text-3xl xl:text-5xl">About us</h2>
			<p className="text-left text-lg md:text-xl xl:text-2xl">
				Athen Labs is an organization dedicated to turning innovative ideas into high-performance
				software products and technological solutions. We combine a passion for technology with the
				expertise of our talented team to deliver exceptional software projects. We are committed to
				providing customized and efficient solutions for companies across various industries.
			</p>
		</article>

		<Image
			src={graphic5}
			alt="Graphic 3"
			width={1500}
			className="absolute -right-[400px] -top-[650px] rotate-90"
		/>
	</section>
)
