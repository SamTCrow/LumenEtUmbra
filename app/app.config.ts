export default defineAppConfig({
	// https://ui.nuxt.com/getting-started/theme#design-system
	ui: {
		navigationMenu: {
			slots: {
				label: "text-xl",
				link: "text-xl",
			},
		},
		colors: {
			neutral: "neutral",
		},
		button: {
			defaultVariants: {
				// Set default button color to neutral
				// color: 'neutral'
			},
		},
	},
});
