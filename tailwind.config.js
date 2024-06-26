/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				display: ['Roboto Condensed', 'sans-serif'],
			},
			colors: {
				light: '#e4f9f5',
				dark: '#40514e',
				secondary: '#11999e',
				primary: {
					DEFAULT: '#30E3CA',
					50: '#D2F9F3',
					100: '#C0F6EF',
					200: '#9CF2E6',
					300: '#78EDDC',
					400: '#54E8D3',
					500: '#30E3CA',
					600: '#1AC1AA',
					700: '#138F7E',
					800: '#0D5E53',
					900: '#062D27',
					950: '#031411',
				},
			},
		},
	},
	plugins: [],
}
