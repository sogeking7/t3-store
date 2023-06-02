import React, { type FC } from 'react'
import { ItemCard } from '../item-card/item-card'
import { api } from '~/utils/api'
import { Loader } from '@mantine/core'

export const ItemGrid: FC = () => {
	const { data, isLoading, isSuccess } = api.product.getAllProducts.useQuery()
	if (isLoading) {
		return (
			<div className='basis-3/4'>
				<Loader className='mx-auto' />
			</div>
		)
	}
	if (isSuccess && !data.length) {
		return <>{'No Data'}</>
	}
	return (
		<div className='md:basis-3/4 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 xs:grid-cols-3 phone:grid-cols-2 md:gap-x-4 gap-x-2 gap-y-8 h-1 py-2'>
			{data?.map((product, ind) => {
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
