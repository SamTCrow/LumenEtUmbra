<script lang="ts" setup>
	import type { TocLink } from "@nuxt/content";

	const { links } = defineProps<{ links: TocLink[] }>();
</script>

<template>
	<div class="w-[30%] md:flex flex-col mt-8 hidden items-center">
		<ul>
			<li v-for="children in links">
				<NuxtLink
					:to="'#' + children.id"
					class="text-xl font-bold hover:text-accent transition-colors duration-200"
					>{{ children.text }}</NuxtLink
				>
				<ul>
					<li v-for="grandChildren in children.children">
						<NuxtLink
							:to="'#' + grandChildren.id"
							class="ml-4 text-lg hover:text-accent transition-colors duration-200"
						>
							{{ grandChildren.text }}
						</NuxtLink>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
