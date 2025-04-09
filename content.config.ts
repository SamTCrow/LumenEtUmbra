import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: {
				include: "**/*.md",
				exclude: ["blogPost/**"],
			},
		}),
		blog: defineCollection({
			type: "page",
			source: "blog/**",
			schema: z.object({
				title: z.string(),
				author: z.string(),
				description: z.string(),
				date: z.date(),
				tags: z.array(z.string()),
				image: z.string().optional(),
			}),
		}),
	},
});
