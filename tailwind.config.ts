import { type Config } from 'tailwindcss'

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
		typography: () => ({}),
		extend: {
			typography: () => ({
				dark: {
					css: {
						color: 'white'
					}
				}
			})
		}
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
} satisfies Config
