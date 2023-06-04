import { Radio } from '@mantine/core'
import { IconCheck, IconStarFilled } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useState } from 'react'

export const FilterRating: FC = () => {
	const [rating, setRating] = useState<string>()
	const router = useRouter()
	const counter = Array(4).fill(0)

	useEffect(() => {
		if (rating) {
			const query = router.query
			query.rating = rating.toString()
			router.push({
				pathname: router.pathname,
				query: query
			})
		}
	}, [rating])
	return (
		<>
			<h1 className='text-2xl tracking-[-1px] font-bold mb-3'>Rating</h1>
			<Radio.Group name='FilterRating' value={rating} onChange={setRating}>
				{counter.map((_val, ind) => {
					const rating = 4 - ind
					return (
						<Radio
							styles={() => ({
								radio: {
									borderRadius: '8px'
								}
							})}
							color='indigo.5'
							icon={({ className }) => (
								<div className={className}>
									<IconCheck
										className='absolute top-[-5px] right-[-5px]'
										size={18}
										color='white'
									/>
								</div>
							)}
							value={rating.toString()}
							className='mb-3'
							label={
								<div className='flex'>
									<ReadlyRating rating={rating} />
									<p>and above</p>
								</div>
							}
						/>
					)
				})}
			</Radio.Group>
		</>
	)
}

interface IReadlyRating {
	rating: number
}

const ReadlyRating: FC<IReadlyRating> = ({ rating }) => {
	const counter = Array(rating).fill(0)
	const remain = Array(5 - rating).fill(0)
	return (
		<div className='flex gap-1 items-center mr-2'>
			{counter.map(() => {
				return <IconStarFilled className='text-[#fab005]' size={12} />
			})}
			{remain.map(() => {
				return <IconStarFilled className='text-[#dee2e6]' size={12} />
			})}
		</div>
	)
}
