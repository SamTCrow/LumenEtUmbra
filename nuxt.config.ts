// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@nuxt/ui",
		"@nuxt/eslint",
		"@nuxt/content",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/scripts",
		"@nuxt/test-utils",
		"@nuxtjs/mdc",
	],
	mdc: {
		components: {
			prose: true,
		},
	},
	content: {
		build: {
			markdown: {
				toc: {
					depth: 3,
					searchDepth: 3,
				},
			},
		},
	},
	css: ["~/assets/css/main.css"],
	ui: {
		colorMode: false,
	},
	future: {
		compatibilityVersion: 4,
	},

	compatibilityDate: "2024-11-27",
});
