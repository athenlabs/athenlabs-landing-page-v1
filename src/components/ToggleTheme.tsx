'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export const ToggleTheme = () => {
	const { isDarkMode, toggle } = useDarkMode(false)

	const classes = 'h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10'

	useEffect(() => {
		const bodyClasses = window.document.body.classList

		if (isDarkMode) {
			bodyClasses.remove('dark')
			bodyClasses.add('light')
		} else {
			bodyClasses.remove('light')
			bodyClasses.add('dark')
		}
	}, [isDarkMode])

	return (
		<button
			title="Toggle theme"
			className="z-100 fixed right-4 top-4 rounded-full text-black transition-all duration-300 hover:opacity-90 dark:text-white md:right-6 md:top-6 xl:right-8 xl:top-8"
			onClick={toggle}
		>
			{isDarkMode ? (
				<SunIcon className={clsx(classes, 'text-secondary')} />
			) : (
				<MoonIcon className={classes} />
			)}
		</button>
	)
}
