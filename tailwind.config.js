export default {
	content: ["src/app/**/*.tsx", "src/components/**/*.tsx"],
	theme: {
		container: {
			center: true,
			padding: "5%"
		},
		screens: {
			xs: "375px",
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1366px",
			"2xl": "1536px",
			"3xl": "1920px"
		},
		extend: {
			colors: {
				neutral: {
					white: "#fbfbfb"
				},
				carbon: "#1c1c1c"
			}
		}
	},
	corePlugins: {
		preflight: false
	},
	future: {
		hoverOnlyWhenSupported: true
	},
	experimental: {
		optimizeUniversalDefaults: true
	}
}
