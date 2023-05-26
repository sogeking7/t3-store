import type { FC } from 'react'
import Image from 'next/image'
import { type IItemProps } from './types'

export const Item: FC<IItemProps> = ({ data }) => {
	return (
		<div>
			<div className='aspect-square bg-contain mb-4'>
				<Image
					src='/img/Luffy-during-Onigashima-raid.webp'
					alt='Product Image'
					className='object-cover rounded-3xl'
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
			<h2 className='text-gray-800 dark:text-gray-200 text-lg font-semibold'>
				{data.title}
			</h2>
			<p className='text-gray-600 dark:text-gray-300 text-sm mb-2'>
				{data.description}
			</p>
			<div className='flex items-center justify-between'>
				<span className='text-green-600 font-semibold'>${data.price}</span>
				<button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm'>
					Add to Cart
				</button>
			</div>
		</div>
	)
}
