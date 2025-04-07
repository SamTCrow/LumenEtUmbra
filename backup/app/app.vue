<script setup lang="ts">
	import NavMenu from "~~/components/NavMenu.vue";
</script>

<template>
	<UApp>
		<div class="pb-4">
			<NavMenu />
		</div>
		<div class="max-w-[1200px] mx-auto">
			<NuxtPage />
		</div>
	</UApp>
</template>
