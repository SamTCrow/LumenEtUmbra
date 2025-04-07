<script lang="ts" setup>
	const path = useRoute().path;
	const { data: play } = await useAsyncData(() =>
		queryCollection("content").path("/").where("page", "=", "play").first()
	);
	console.log(play.value);
</script>

<template>
	<ContentRenderer
		v-if="play"
		:value="play"
		class="prosa" />
	<div v-else>
		<h1 class="text-3xl font-bold">Loading...</h1>
	</div>
</template>
