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
			className={`hover:op100 hover-bg-hex-8883 z-100 fixed bottom-4 right-4 h-10 w-10 rounded-full transition duration-300 ${
				scrollY >= 300 ? 'opacity-100' : '!opacity-0'
			}`}
			onClick={goToPageTop}
		>
			<ChevronUpIcon className="h-12 w-12 text-black dark:text-white" />
		</button>
	)
}
