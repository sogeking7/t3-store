import type { FC } from 'react'
import { CatBtn } from './cat-button'
import { IconArrowRight } from '@tabler/icons-react'
import { data as categories } from 'public/data/categories'

export const CategoryBar: FC = () => {
	return (
		<div className='w-full h-screen'>
			<button
				type='button'
				className='focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-xl px-2 py-2 text-center inline-flex items-center dark:focus:ring-blue-800'
			>
				Categories
				<IconArrowRight />
			</button>
			<ul>
				{categories.map(({ name, slug }, index) => (
					<li key={index}>
						<CatBtn title={name} slug={slug} />
					</li>
				))}
			</ul>
		</div>
	)
}
