import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}	

	return (
		<button
			className={`outline-none rounded-full px-3 ${theme == 'light' ? 'bg-yellow-200 ' : 'dark:bg-indigo-600 '} text-zinc-600 dark:text-gray-100 font-bold appearance-none`}
			onClick={() => {
				if (theme === 'dark') 
					setTheme('light')
				else 
					setTheme('dark')
			}}
		>
			{theme}
		</button>
	)
}

export default ThemeSwitch
