'use client'

import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export const GoToTop = () => {
	const [scrollY, setScrollY] = useState(0)

	const goToPageTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY || 0)

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [scrollY])

	return (
		<button
			title="Scroll to top"
			className={`hover-bg-hex-8883 z-100 fixed bottom-4 right-4 rounded-full transition duration-300 hover:opacity-100 md:bottom-4 md:right-4 xl:bottom-6 xl:right-6 ${
				scrollY > 0 ? 'opacity-100' : '!opacity-0'
			}`}
			onClick={goToPageTop}
		>
			<ChevronUpIcon className="h-6 w-6 text-black dark:text-white md:h-8 md:w-8 xl:h-10 xl:w-10" />
		</button>
	)
}
