<script setup lang="ts">
	import { useWindowScroll } from "@vueuse/core";
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />

		<NavMenu />

		<div class="w-full md:px-4 px-2 md:mx-auto md:max-w-6xl md:pb-10 h-full">
			<NuxtPage />
		</div>
	</div>
</template>
