import { FC } from 'react'
import { FilterCatBtn } from './filter-cat-button'

let categories = [
	'Cellphones & Telecommunications',
	'Computer & Office',
	'Consumer Electronics',
	'Home Appliances',
	'Security & Protection',
	'Home Improvement',
	'Lights & Lighting',
	'Home & Garden',
	'Tools',
	'Education & Office Supplies',
	'Automobiles & Motorcycles',
	'Furniture',
	"Men's Clothing",
	"Women's Clothing",
	'Shoes',
	"Children's Clothing & Shoes",
	'Apparel Accessories',
	'Jewelry & Accessories',
	'Watches',
	'Luggage & Bags',
	'Sports & Entertainment',
	'Mother & Kids',
	'Toys & Hobbies',
	'Beauty & Health',
	'Novelty & Special Use',
	'Hair Extensions & Wigs',
	'Electronic Components & Supplies',
	'Weddings & Events'
]

export const FilterBar: FC = () => {
	return (
		<div className='w-full h-screen p-2'>
			<button
				type='button'
				className='focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-xl px-2 py-2 text-center inline-flex items-center dark:focus:ring-blue-800'
			>
				Categories
				<svg
					aria-hidden='true'
					className='w-5 h-5 ml-2 -mr-1'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clip-rule='evenodd'
					></path>
				</svg>
			</button>
			<ul className=' font-medium'>
				{categories.map((category, index) => (
					<li key={index}>
						<FilterCatBtn title={category} />
					</li>
				))}
			</ul>
		</div>
	)
}
