import { NumberInput } from '@mantine/core'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
// @ts-ignore comment 
export const FilterPriceRanger: FC = ({ priceRange, setPriceRange }) => {
	const router = useRouter()
	useEffect(() => {
		const query = router.query
		query.from = priceRange[0]!.toString()
		query.to = priceRange[1]!.toString()
		router.push({
			pathname: router.pathname,
			query: query
		})
	}, [priceRange[0], priceRange[1]])

	return (
		<div className='mb-8'>
			<h1 className='text-2xl tracking-[-1px] font-bold mb-3'>Price</h1>
			<div className='flex'>
				<NumberInput
					max={priceRange[1]}
					min={0}
					value={priceRange[0]}
					onChange={val => setPriceRange([+val, priceRange[1]!])}
					styles={theme => ({
						input: {
							border: theme.colorScheme === 'dark' ? 'none' : ''
						}
					})}
					w={100}
					mr={16}
					hideControls
					size='sm'
					radius='xl'
					parser={value => value.replace(/\$\s?|(,*)/g, '')}
					formatter={value =>
						!Number.isNaN(parseFloat(value))
							? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
							: '$ '
					}
				/>
				<NumberInput
					max={1000}
					min={priceRange[0]}
					value={priceRange[1]}
					onChange={val => setPriceRange([priceRange[0]!, +val])}
					styles={theme => ({
						input: {
							// border: theme.colorScheme === 'dark' ? 'none' : ''
						}
					})}
					w={100}
					size='sm'
					hideControls
					radius='xl'
					parser={value => value.replace(/\$\s?|(,*)/g, '')}
					formatter={value =>
						!Number.isNaN(parseFloat(value))
							? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
							: '$ '
					}
				/>
			</div>
		</div>
	)
}
