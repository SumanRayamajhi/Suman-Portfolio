import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				lightHover: "#fcf4ff",
				darkHover: "#2a004a",
			},

			boxShadow: {
				"black": "1px 1px 5px 1px  #000",
			},
			backgroundImage: {
				"parallax": 'url("../public/images/heroimg.svg")'
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
