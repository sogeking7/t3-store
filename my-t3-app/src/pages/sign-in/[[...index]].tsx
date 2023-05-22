import { SignIn } from '@clerk/nextjs'
import Head from 'next/head'
import { Header } from '../../../components/layout/header'
import React from 'react'

const SignInPage = () => {
	return (
		<>
			<Head>
				<title>User</title>
				<meta name='description' content='Generated by create-t3-app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className=''>
				<div className='cont flex justify-center items-center h-screen'>
					<SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' />
				</div>
			</main>
		</>
	)
}

export default SignInPage
