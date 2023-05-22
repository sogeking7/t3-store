import { FC, ReactNode } from 'react'

interface IconButtonProps {
	icon: ReactNode
	color?: string
}

export const IconBtn: FC<IconButtonProps> = ({ icon, color }) => {
	return (
		<button
			type='button'
			className={`text-zinc-600 bg-slate-200 hover:bg-slate-300 focus:ring-2 focus:ring-blue-300 focus:outline-none font-medium rounded-xl text-sm p-[4.005px] text-center inline-flex items-center mr-2 dark:text-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-blue-800`}
		>
			{icon}
		</button>
	)
}
