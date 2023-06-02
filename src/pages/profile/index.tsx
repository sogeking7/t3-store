import React from 'react'
import Head from 'next/head'
import { Header } from '../../../components/layout/header/header'
import { UserProfile } from '@clerk/nextjs'
import { NextPage } from 'next'

const ProfilePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>User</title>
				<meta name='description' content='Generated by create-t3-app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className=''>
				<Header />
				<div className='cont'>
					<UserProfile />
				</div>
			</main>
		</>
	)
}

export default ProfilePage