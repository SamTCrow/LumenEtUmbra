// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/content", "@nuxt/fonts", "@nuxt/icon"],
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

	ui: {
		colorMode: false,
	},

	compatibilityDate: "2024-11-27",
});
