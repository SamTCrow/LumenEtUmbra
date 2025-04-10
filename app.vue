<script setup lang="ts">
	import { useWindowScroll } from "@vueuse/core";

	const { x, y } = useWindowScroll();
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />

		<NavMenu />

		<div class="w-full px-4 mx-auto max-w-6xl pb-10 h-full">
			<NuxtPage />
		</div>
		<ScrollTop v-if="y > 400" />
	</div>
</template>
