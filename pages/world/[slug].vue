<script lang="ts" setup>
	const path = useRoute().path;
	const { data: page } = useAsyncData(() => queryCollection("content").path(path).first());
</script>

<template>
	<div
		v-if="page"
		class="flex gap-4"
	>
		<Toc
			v-if="page.body.toc"
			:links="page.body.toc.links"
		/>
		<ContentRenderer
			:value="page"
			class="prosa md:w-[70%] w-full"
			prose
		/>
		<ScrollTop />
	</div>
	<div v-else>Loading...</div>
</template>

<style lang="css" scoped>
	table {
		overflow-y: scroll;
	}
</style>
