import type { FC } from 'react'
import { CatBtn } from './cat-button'
import { IconArrowRight } from '@tabler/icons-react'
import { data as categories } from 'public/data/categories'

export const CategoryBar: FC = () => {
	return (
		<>
			<button
				type='button'
				className='focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-xl px-2 py-2 text-center inline-flex items-center dark:focus:ring-blue-800'
			>
				Categories
				<IconArrowRight />
			</button>
			<ul>
				{categories.map(({ name, id, slug }) => (
					<li key={id}>
						<CatBtn  title={name} categoryId={id} slug={slug}/>
					</li>
				))}
			</ul>
		</>
	)
}
