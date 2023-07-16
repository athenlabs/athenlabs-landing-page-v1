// import Image from 'next/image'
// import graphic5 from '@/assets/graphics/graphic-5.webp'
import { app } from '@/config/config'

export const OurMethodology = () => (
	<section className="flex items-center justify-end p-6 text-black dark:text-white">
		{/* <Image src={graphic5} alt="Graphic 3" width={500} className="rotate-90" /> */}

		<article className="z-10 flex max-w-6xl flex-col items-end justify-end gap-6 self-end text-right md:mr-12">
			<h2 className="text-xl font-bold md:text-3xl xl:text-5xl">
				<a href="#our-methodology">
					Our work <br /> methodology
				</a>
			</h2>

			<div className="flex flex-col gap-4">
				<p className="flex flex-col gap-2 text-lg md:text-xl xl:text-2xl">
					ALISF ({app.company} Innovative Solutions Framework) is a methodology for success. It
					starts with project initiation, defining objectives and creating a plan. Next,
					requirements are analyzed and user stories are defined. The design phase focuses on
					creating intuitive interfaces and selecting appropriate technologies. Development follows
					Agile principles, with code quality and continuous integration. Assurance includes
					comprehensive testing and user acceptance. Deployment and maintenance ensure smooth
					transitions and ongoing support. Throughout the process, collaboration with clients is
					key, with open communication and knowledge transfer. ALISF embodies innovation,
					excellence, collaboration, integrity, customer focus, and continuous learning, delivering
					exceptional software solutions.
				</p>
			</div>
		</article>
	</section>
)
