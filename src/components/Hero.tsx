import { Logo } from '@/assets/icons/Logo'
import Image from 'next/image'
import graphic2 from '@/assets/graphics/graphic-2.webp'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const Hero = () => (
	<section className="relative grid h-screen place-items-center">
		<div className="z-10 flex flex-col items-center justify-center">
			<Logo className="h-auto w-[900px] fill-white" />
			<ChevronDownIcon className="h-12 w-12 animate-bounce text-white" />
		</div>

		<Image
			src={graphic2}
			alt="Graphic 2"
			className="absolute -left-96 -top-[700px] z-0 rotate-2 transition"
		/>
	</section>
)
