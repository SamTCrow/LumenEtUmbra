<script lang="ts" setup>
	const path = useRoute().path;
	const { data: page } = useAsyncData(() => queryCollection("content").path(path).first());
</script>

<template>
	<div
		v-if="page"
		class="flex gap-4"
	>
		<ContentRenderer
			:value="page"
			class="prosa md:w-[70%] w-full mx-auto"
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
