<script lang="ts" setup>
	const path = useRoute().path;
	const { data: page } = useAsyncData(() => queryCollection("content").path(path).first());
</script>

<template>
	<div
		v-if="page"
		class="flex gap-4"
	>
		<div class="w-[30%] md:flex flex-col mt-8 hidden items-center">
			<ul>
				<li v-for="children in page.body.toc?.links">
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
		<ContentRenderer
			:value="page"
			class="prosa w-[70%] mx-auto"
			prose
		/>
		<ScrollTop />
	</div>
	<div v-else>Loading...</div>
</template>
