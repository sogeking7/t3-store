import { type NextPage } from 'next'
import Head from 'next/head'

import React from 'react'
import { Header } from '../../components/layout/header/header'
import { FilterBar } from 'components/layout/filter-bar/filter-bar'
import { Item } from 'components/layout/item/item'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>t3-store </title>
				<meta name='description' content='Generated by create-t3-app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Header />
				<div className='cont flex pt-4 gap-4 '>
					<div className='filter-bar-cont md:block hidden'>
						<FilterBar />
					</div>
					<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-8 main-cont h-1 py-2'>
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
				</div>
			</main>
		</>
	)
}

export default Home
