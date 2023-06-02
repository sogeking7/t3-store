import type { FC } from 'react'
import Image from 'next/image'
import { type IItemProps } from './types'
import { Button, Rating, createStyles, getStylesRef, rem } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

const useStyles = createStyles(() => ({
	controls: {
		ref: getStylesRef('controls'),
		transition: 'opacity 150ms ease',
		opacity: 0
	},
	control: {
		backgroundColor: 'red'
	},
	root: {
		'&:hover': {
			[`& .${getStylesRef('controls')}`]: {
				opacity: 1
			}
		}
	},
	indicator: {
		width: rem(12),
		height: rem(4),
		transition: 'width 250ms ease',
		zIndex: 100,
		color: 'red',
		'&[data-active]': {
			width: rem(40)
		}
	}
}))

export const Item: FC<IItemProps> = ({ data }) => {
	const { classes } = useStyles()
	return (
		<div className='flex gap-6 w-full'>
			<div className='rounded-3xl mb-4 w-[41.5%] h-[360px] overflow-hidden'>
				<Carousel
					slideGap={5}
					height={360}
                    withIndicators
                    
					nextControlIcon={<IconArrowRight size={16} />}
					previousControlIcon={<IconArrowLeft size={16} />}
					classNames={classes}
				>
					<Carousel.Slide color='red'>
						<Image
							src={data.images[0]!.url}
							alt='Product Image'
							className='object-cover bg-gray-5'
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '100%', height: '100%' }}
						/>
					</Carousel.Slide>
					<Carousel.Slide color='red'>
						<Image
							src={data.images[0]!.url}
							alt='Product Image'
							className='object-cover bg-gray-5'
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '100%', height: '100%' }}
						/>
					</Carousel.Slide>
                    <Carousel.Slide color='red'>
						<Image
							src={data.images[0]!.url}
							alt='Product Image'
							className='object-cover bg-gray-5'
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '100%', height: '100%' }}
						/>
					</Carousel.Slide>
				</Carousel>
			</div>
			<div className='w-[30.5%]'>
				<h2 className='text-gray-800 dark:text-gray-200 text-lg font-bold mb-2'>
					{data.title}
				</h2>
				<div className='flex-inline flex gap-1 mb-2'>
					<Rating value={data.rating} fractions={2} readOnly />
					<p className='text-sm'>{data.rating.toFixed(1)}</p>
				</div>
			</div>

			<div className='w-[28%]'>
				<div className='bg-slate-100 dark:bg-zinc-800 p-4 rounded-3xl'>
					<div className='flex items-center justify-between mb-2'>
						<span className='font-semibold text-xl'>${data.price}</span>
					</div>
					<div className='flex'>
						<Button
							className=' rounded-full basis-1/2 mr-1 bg-zinc-950 hover:bg-zinc-900'
							size='md'
						>
							Add to Cart
						</Button>
						<Button
							className='bg-red-600 basis-1/2 rounded-full hover:bg-red-500'
							size='md'
						>
							Buy now
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
