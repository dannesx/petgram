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
				primary: '#30e3ca',
			},
		},
	},
	plugins: [],
}
