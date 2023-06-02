import type { FC } from 'react'
import Image from 'next/image'
import { type IItemCardProps } from './types'
import { Rating } from '@mantine/core'
import Link from 'next/link'

export const ItemCard: FC<IItemCardProps> = ({ data }) => {
	return (
		<Link href={`/item/${data.id}`}>
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
			<div className='flex-inline flex gap-1'>
				<Rating value={data.rating} fractions={2} readOnly className='mb-2' />
				<p className='text-sm'>{data.rating.toFixed(1)}</p>
			</div>
			<div className='flex items-center justify-between'>
				<span className='font-semibold text-xl'>${data.price}</span>
			</div>
		</Link>
	)
}
