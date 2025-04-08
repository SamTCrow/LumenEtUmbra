<script setup lang="ts">
	import DarkMode from "./components/DarkMode.vue";
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<div class="w-full">
			<NavMenu />
		</div>
		<div class="w-full px-4 mx-auto max-w-7xl pb-10 h-full flex">
			<NuxtPage />
		</div>
		<ScrollTop />
	</div>
</template>
