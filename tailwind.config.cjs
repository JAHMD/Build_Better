/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
			},
			fontFamily: {
				imperialScript: ["Imperial Script", "cursive"],
			},
			colors: {
				primary: {
					"black-50": "hsl(175, 7%, 35%)",
					"black-100": "hsl(184, 11%, 30%)",
					"black-200": "hsl(194, 13%, 20%)",
					"black-200-35": "hsla(193, 14%, 20%, 0.35)",
					"brown-100": "hsl(44, 21%, 90%)",
					"brown-95": "hsl(44, 21%, 95%)",
					"brown-100-90": "hsl(44, 21%, 90%, 0.9)",
					"brown-200": "hsl(27, 28%, 50%)",
					"brown-200-30": "hsla(27, 28%, 50%, 0.3)",
					header: "hsla(20,27%,85%,0.9)",
					"pomodoro-300": "hsl(0, 45%, 50%)",
					"pomodoro-200": "hsl(0, 55%, 60%)",
					"pomodoro-100": "hsl(0, 55%, 70%)",
				},
			},
			keyframes: {
				bounce: {
					"0%, 100%": {
						transform: "translateX(25%)",
					},
					"50%": {
						transform: "none",
					},
				},
			},
			animation: {
				bounce: "bounce 1s infinite ease alternate",
			},
		},
	},
	plugins: [],
};
