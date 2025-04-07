<script lang="ts" setup>
	const { data: page } = await useAsyncData(() => queryCollection("content").path("/").first());
</script>

<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		class="text-pretty" />
</template>
