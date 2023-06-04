import { FC } from 'react'
import { FilterRating } from './filter-rating'
import { FilterPriceRanger } from './filter-price-ranger'
import { useState } from 'react'
import { useRouter } from 'next/router'

export const Filter: FC = () => {
	const router = useRouter()
	const {from, to} = router.query// @ts-ignore comment 
	const [priceRange, setPriceRange] = useState([+from || 0, +to || 1000])

	
	return (
		<div className='basis-1/4 md:block hidden'>
			<FilterPriceRanger
			// @ts-ignore comment 
				priceRange={priceRange}
				setPriceRange={setPriceRange}
			/>
			{/* <Divider my='xs' /> */}
			<FilterRating />
		</div>
	)
}
