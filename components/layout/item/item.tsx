import type { FC } from 'react'
import Image from 'next/image'
import { type IItemProps } from './types'
import { Rating } from '@mantine/core'

export const Item: FC<IItemProps> = ({ data }) => {
	return (
		<div className='cursor-pointer'>
			<div className='aspect-square bg-contain mb-4'>
				<Image
					src={data.images[0]!.url}
					alt='Product Image'
					className='object-cover rounded-3xl'
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
			<h2 className='text-gray-800 dark:text-gray-200 custom-line-clamp-3 leading-tight text-sm'>
				{data.title}
			</h2>
			<Rating value={data.rating} fractions={2} readOnly className='mb-2' />
			<div className='flex items-center justify-between'>
				<span className='font-semibold text-xl'>${data.price}</span>
			</div>
		</div>
	)
}
