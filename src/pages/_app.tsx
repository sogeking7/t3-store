import { AppProps, type AppType } from 'next/app'
import { api } from '~/utils/api'

import '~/styles/globals.css'
// import '~/styles/item.css'
import { ThemeProvider } from 'next-themes'
import { ClerkProvider } from '@clerk/nextjs'
import { MantineProvider } from '@mantine/core'
import { RouterTransition } from 'components/RouterTransition'

const MyApp: AppType = (props: AppProps) => {
	const { Component, pageProps } = props;
	return (
		<MantineProvider>
			<ThemeProvider attribute='class'>
				<ClerkProvider {...pageProps}>
					<RouterTransition />
					<Component {...pageProps} />
				</ClerkProvider>
			</ThemeProvider>
		</MantineProvider>
	)
}

export default api.withTRPC(MyApp)
