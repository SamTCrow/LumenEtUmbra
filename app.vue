<script setup lang="ts">
	import DarkMode from "./components/DarkMode.vue";
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />

		<NavMenu />

		<div class="w-full px-4 mx-auto max-w-6xl pb-10 h-full">
			<NuxtPage />
		</div>
		<ScrollTop />
	</div>
</template>
