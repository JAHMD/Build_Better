/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				imperialScript: ["Imperial Script", "cursive"],
			},
			colors: {
				primary: {
					"black-50": "hsl(175, 7%, 33%)",
					"black-100": "hsl(184, 11%, 28%)",
					"black-200": "hsl(194, 13%, 20%)",
					"black-200-35": "hsla(193, 14%, 20%, 0.35)",
					"brown-100": "hsl(44, 21%, 90%)",
					"brown-100-90": "hsl(44, 21%, 90%, 0.9)",
					"brown-200": "hsl(27, 28%, 50%)",
					"brown-200-30": "hsla(27, 28%, 50%, 0.3)",
				},
			},
		},
	},
	plugins: [],
};