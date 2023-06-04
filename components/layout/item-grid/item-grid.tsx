import React, { type FC } from 'react'
import { ItemCard } from '../item-card/item-card'
// import { api } from '~/utils/api'
import { type IItemCard } from '~/../components/layout/item-card/types'
// import { type IItemGridProps } from './types'
// @ts-ignore comment 
export const ItemGrid:FC= ({ data }) => {
	if (!data) {
		return <>{'No data'}</>
	}
	return (
		<div className='md:basis-3/4 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 xs:grid-cols-3 phone:grid-cols-2 md:gap-x-4 gap-x-2 gap-y-8 h-1 py-2'>
			{data.map((product: IItemCard, ind: number) => {
				return (
					<ItemCard
						key={ind}
						data={{
							id: product.id,
							title: product.title,
							price: product.price,
							rating: product.rating,
							images: product.images
						}}
					/>
				)
			})}
		</div>
	)
}
