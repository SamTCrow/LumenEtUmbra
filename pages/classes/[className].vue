<script lang="ts" setup>
	const path = useRoute().path;
	const { data: page } = useAsyncData(() => queryCollection("content").path(path).first());
</script>

<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		class="text-pretty"
	/>
	<div v-else>Loading...</div>
</template>
