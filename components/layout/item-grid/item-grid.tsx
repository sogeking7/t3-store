import React, { type FC } from 'react'
import { Item } from '../item/item'
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
		<div className='md:basis-3/4 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-8 h-1 py-2'>
			{data?.map((product, ind) => {
				return (
					<Item
						key={ind}
						data={{
							title: product.title,
							description: product.description,
							price: product.price,
							quantity: product.quantity,
							rating: product.rating,
							brand: product.brand,
							images: product.images
						}}
					/>
				)
			})}
		</div>
	)
}
