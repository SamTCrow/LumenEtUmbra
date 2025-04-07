<script lang="ts" setup>
	const { data: page } = useAsyncData(() => queryCollection("content").path("/").first());
</script>

<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		class="text-pretty"
	/>
	<div v-else>Loading...</div>
</template>
