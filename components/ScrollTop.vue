<script setup lang="ts">
	const scrollTop = () => window.scrollTo(0, 0);
</script>

<template>
	<Icon
		name="ic:baseline-arrow-circle-up"
		size="3em"
		class="fixed bottom-4 right-4 cursor-pointer"
		@click="scrollTop"
	/>
</template>
