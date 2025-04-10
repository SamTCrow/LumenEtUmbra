<script setup lang="ts">
	import { useWindowScroll } from "@vueuse/core";

	const scrollTop = () => window.scrollTo(0, 0);
	const { x, y } = useWindowScroll();
</script>

<template>
	<Icon
		v-if="y > 1000"
		name="ic:baseline-arrow-circle-up"
		size="3em"
		class="fixed top-[15%] left-[25%] cursor-pointer"
		@click="scrollTop"
	/>
</template>
