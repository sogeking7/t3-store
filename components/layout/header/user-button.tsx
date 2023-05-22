import { FC } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export const UserButtonComponent: FC = () => {
	return (
		<div className='mr-2 text-center flex items-center'>
			<SignedIn>
				{/* Mount the UserButton component */}
				<UserButton />
			</SignedIn>
			<SignedOut>
				{/* Signed out users get sign in button */}
				<SignInButton />
			</SignedOut>
		</div>
	)
}
