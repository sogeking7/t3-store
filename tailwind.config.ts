import { type Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	purge: {
		enabled: true,
		options: {
			safelist: ['dark'] //specific classes
		}
	},
	theme: {
		screens: {
			phone: '290px',
			xs: '475px',
			...defaultTheme.screens
		},
		typography: () => ({}),
		extend: {
			typography: () => ({
				dark: {
					css: {
						color: 'white'
					}
				}
			}),
			fontFamily: {
				body: ['Inter']
			}
		}
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
} satisfies Config
