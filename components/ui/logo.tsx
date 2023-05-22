import Link from 'next/link'
import { FC } from 'react'

export const Logo: FC = () => {
	return (
		<Link href='/'>
			<p className='text-2xl font-bold text-zinc-800 dark:text-gray-100'>
				t3-store
			</p>
		</Link>
	)
}
