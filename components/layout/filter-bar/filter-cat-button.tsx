import type { FC } from 'react'

interface FilterCatBtnProps {
	title: string
}

export const FilterCatBtn: FC<FilterCatBtnProps> = ({ title }) => {
	return (
		<a
			href='#'
			className='flex items-center p-2 text-gray-900 rounded-xl dark:text-white hover:bg-slate-200 dark:hover:bg-indigo-600'
		>
			{title}
		</a>
	)
}
