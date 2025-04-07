<script lang="ts" setup>
	import ScrollTop from "../../components/ScrollTop.vue";
	const path = useRoute().path;
	const { data: page } = useAsyncData(() => queryCollection("content").path(path).first());
</script>

<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		prose
	/>
	<div v-else>Loading...</div>
</template>
