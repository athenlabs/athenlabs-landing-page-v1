import { GoToTop } from '@/components/GoToTop'
import { ToggleTheme } from '@/components/ToggleTheme'
import { Hero } from '@/components/Hero'
import { AboutUs } from '@/components/AboutUs'
import { WeDo } from '@/components/WeDo'
import { OurMethodology } from '@/components/OurMethodology'
import { Contact } from '@/components/Contact'

export default function Home() {
	return (
		<main className="overflow-hidden bg-white dark:bg-black">
			<div className="flex flex-col gap-24 md:gap-56 xl:gap-80">
				<Hero />
				<AboutUs />
				<WeDo />
				<OurMethodology />
				<Contact />
			</div>

			<GoToTop />
			<ToggleTheme />
		</main>
	)
}
