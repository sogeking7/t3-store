import DarkmodeSwitcher from '../../ui/darkmode-switcher'
import React, { FC } from 'react'
import { Logo } from 'components/ui/logo'
import { UserButtonComponent } from './user-button'
import { IconBtn } from 'components/ui/icon-btn'
import { IconShoppingCart, IconHeart } from '@tabler/icons-react'

export const Header: FC = () => {
	return (
		<div className='h-[60px] border-b-[1px] dark:border-b-zinc-800'>
			<div className='cont flex justify-between items-center h-full'>
				<Logo />

				<div className='flex gap-8'>
					<div className='flex gap-4'>
					<UserButtonComponent />
						<IconBtn icon={<IconShoppingCart />} />
						<IconBtn icon={<IconHeart />} />
					</div>
					<div className='border-l dark:border-l-zinc-800 flex pl-4'>
						<DarkmodeSwitcher />
					</div>
				</div>
			</div>
		</div>
	)
}
