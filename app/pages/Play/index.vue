<script lang="ts" setup>
	const path = useRoute().path;
	console.log(path);
	const { data: home } = await useAsyncData(() =>
		queryCollection("content").path("/").where("page", "=", "play").first()
	);
</script>

<template>
	<ContentRenderer
		v-if="home"
		:value="home"
		class="prosa" />
	<div v-else>
		<h1 class="text-3xl font-bold">Loading...</h1>
	</div>
</template>
