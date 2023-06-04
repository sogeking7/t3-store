import Link from 'next/link'
import type { FC } from 'react'

interface FilterCatBtnProps {
	title: string
	slug: string
	categoryId: number
}

export const CatBtn: FC<FilterCatBtnProps> = ({ title, slug, categoryId }) => {
	return (
		<Link
			href={`/category/${categoryId}/${slug}`}
			className='flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-slate-200 dark:hover:bg-indigo-600'
		>
			{title}
		</Link>
	)
}
