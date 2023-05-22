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
		<select
			value={theme}
			className='outline-none rounded-full px-3 dark:bg-zinc-800 bg-slate-200 text-zinc-600 dark:text-gray-300 font-bold  appearance-none'
			onChange={e => setTheme(e.target.value)}
		>
			<option value='dark'>Dark</option>
			<option value='light'>Light</option>
		</select>
	)
}

export default ThemeSwitch
