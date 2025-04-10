<script lang="ts" setup>
	const { data: page } = useAsyncData(() => queryCollection("content").path("/").first());
</script>

<template>
	<ClientOnly>
		<ContentRenderer
			v-if="page"
			:value="page"
			class="text-pretty prosa"
		/>
		<div v-else>Loading...</div>
	</ClientOnly>
</template>
