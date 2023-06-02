import type { FC } from 'react'
import { FilterCatBtn } from './cat-button'
import { IconArrowRight } from '@tabler/icons-react'

export const categories = [
	{ id: 1, name: 'Cellphones & Telecommunications' },
	{ id: 2, name: 'Computer & Office' },
	{ id: 3, name: 'Consumer Electronics' },
	{ id: 4, name: 'Home Appliances' },
	{ id: 5, name: 'Security & Protection' },
	{ id: 6, name: 'Home Improvement' },
	{ id: 7, name: 'Lights & Lighting' },
	{ id: 8, name: 'Home & Garden' },
	{ id: 9, name: 'Tools' },
	{ id: 10, name: 'Education & Office Supplies' },
	{ id: 11, name: 'Automobiles & Motorcycles' },
	{ id: 12, name: 'Furniture' },
	{ id: 13, name: "Men's Clothing" },
	{ id: 14, name: "Women's Clothing" },
	{ id: 15, name: 'Shoes' },
	{ id: 16, name: "Children's Clothing & Shoes" },
	{ id: 17, name: 'Apparel Accessories' },
	{ id: 18, name: 'Jewelry & Accessories' },
	{ id: 19, name: 'Watches' },
	{ id: 20, name: 'Luggage & Bags' },
	{ id: 21, name: 'Sports & Entertainment' },
	{ id: 22, name: 'Mother & Kids' },
	{ id: 23, name: 'Toys & Hobbies' },
	{ id: 24, name: 'Beauty & Health' },
	{ id: 25, name: 'Novelty & Special Use' },
	{ id: 26, name: 'Hair Extensions & Wigs' },
	{ id: 27, name: 'Electronic Components & Supplies' },
	{ id: 28, name: 'Weddings & Events' }
]

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
				{categories.map(({ name }, index) => (
					<li key={index}>
						<FilterCatBtn title={name} />
					</li>
				))}
			</ul>
		</div>
	)
}
