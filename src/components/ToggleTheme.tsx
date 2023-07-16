'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export const ToggleTheme = () => {
	const { isDarkMode, toggle } = useDarkMode(false)

	const classes = 'h-10 w-10'

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
			className="z-100 fixed right-6 top-6 rounded-full text-black transition-all duration-300 hover:opacity-90 dark:text-white"
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
