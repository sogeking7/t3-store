import Link from 'next/link'
import type { FC } from 'react'
import Image from 'next/image'
import t3LogoDark from '../../public/t3-logo/t3-dark.svg'
import t3LogoLight from '../../public/t3-logo/t3-light.svg'
import { useTheme } from 'next-themes'

export const Logo: FC = () => {
	const { theme } = useTheme()

	return (
		<Link href='/'>
			<div className='flex gap-2 items-center justify-center'>
				<Image alt={'logo'} width={30} height={30} src={theme === 'dark' ? t3LogoLight : t3LogoDark} />
				<p className='text-2xl font-[500] text-zinc-800 dark:text-gray-100'>
					store
				</p>
			</div>
		</Link>
	)
}
