import { type AppType } from 'next/app'
import { api } from '~/utils/api'

import '~/styles/globals.css'
import '~/../components/layout/item/item.css'
import { ThemeProvider } from 'next-themes'
import { ClerkProvider } from '@clerk/nextjs'
import { MantineProvider } from '@mantine/core'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
	return (
		<MantineProvider>
			<ThemeProvider attribute='class'>
				<ClerkProvider {...pageProps}>
					<Component {...pageProps} />
				</ClerkProvider>
			</ThemeProvider>
		</MantineProvider>
	)
}

export default api.withTRPC(MyApp)
