import DarkmodeSwitcher from '../../ui/darkmode-switcher'
import type { FC } from 'react'
import { Logo } from 'components/ui/logo'
import { UserButtonComponent } from './user-button'
import { IconBtn } from 'components/ui/icon-btn'
import { IconShoppingCart, IconHeart } from '@tabler/icons-react'
import { SearchInput } from './search-input'

export const Header: FC = () => {
	return (
		<div className='h-[64px]'>
			<div className='cont flex justify-between items-center h-full gap-12'>
				<div className='filter-bar-cont flex justify-start pl-2 basis-1/4'>
					<Logo />
				</div>

				<div className='flex justify-between basis-3/4 w-full gap-8'>
					<div className='basis-3/4'>
						<SearchInput />
					</div>
					<div className='flex gap-8 basis-1/4'>
						<div className='flex gap-4 items-center'>
							<UserButtonComponent />
							<IconBtn
								icon={<IconShoppingCart size={20} />}
								title={'Cart'}
								path={'/cart'}
							/>
							<IconBtn
								icon={<IconHeart size={20} />}
								title={'Wishlist'}
								path={'/wishlist'}
							/>
						</div>
						<div className='border-l dark:border-l-zinc-700 flex pl-4'>
							<DarkmodeSwitcher />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
