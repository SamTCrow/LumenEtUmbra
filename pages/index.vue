<script lang="ts" setup>
	const { data: page } = useAsyncData(() => queryCollection("content").path("/").first());
</script>

<template>
	<ClientOnly>
		<ContentRenderer
			v-if="page"
			:value="page"
			class="text-pretty"
		/>
		<div v-else>Loading...</div>
	</ClientOnly>
</template>
