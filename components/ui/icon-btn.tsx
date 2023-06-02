import type { FC, ReactNode } from 'react'
import Link from 'next/link'

interface IconButtonProps {
	icon: ReactNode
	path: string
	title: string
}

export const IconBtn: FC<IconButtonProps> = ({ icon, path, title }) => {
	return (
		<Link href={path}>
			<button
				type='button'
				className={`p-[4.005px] text-center items-center flex flex-col text-[12px] w-[60px] h-[40px]`}
			>
				<i>{icon}</i>
				<p className='text-[12px] dark:text-white'>{title}</p>
			</button>
		</Link>
	)
}
