import DarkmodeSwitcher from '../../ui/darkmode-switcher'
import type { FC } from 'react'
import { Logo } from 'components/ui/logo'
import { UserButtonComponent } from './user-button'
import { IconBtn } from 'components/ui/icon-btn'
import { IconShoppingCart, IconHeart } from '@tabler/icons-react'
import { SearchInput } from './search-input'

export const Header: FC = () => {
	return (
		<div className='h-[60px]'>
			<div className='cont flex justify-between items-center h-full gap-4 '>
				<div className='filter-bar-cont flex justify-start pl-2'>
					<Logo />
				</div>

				<div className='main-cont flex justify-between'>
					<div className='w-[500px]'>
						<SearchInput />
					</div>
					<div className='flex gap-8'>
						<div className='flex gap-4 items-center'>
							<UserButtonComponent />
							<IconBtn icon={<IconShoppingCart />} path={'/cart'} />
							<IconBtn icon={<IconHeart />} path={'/wishlist'} />
						</div>
						<div className='border-l dark:border-l-zinc-800 flex pl-4'>
							<DarkmodeSwitcher />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
