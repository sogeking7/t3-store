import type { FC } from 'react'
import Image from 'next/image'

export const Item: FC = () => {
	return (
		<div>
			<div className='aspect-square bg-contain mb-4'>
				<Image
					src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/Luffy-during-Onigashima-raid.jpg'
					alt='Product Image'
					className='w-full h-full object-cover rounded-3xl'
				/>
			</div>
			<h2 className='text-gray-800 dark:text-gray-200 text-lg font-semibold'>
				Product Name
			</h2>
			<p className='text-gray-600 dark:text-gray-300 text-sm mb-2'>
				Product Description
			</p>
			<div className='flex items-center justify-between'>
				<span className='text-green-600 font-semibold'>$19.99</span>
				<button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm'>
					Add to Cart
				</button>
			</div>
		</div>
	)
}
