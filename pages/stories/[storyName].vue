<script lang="ts" setup>
	const { storyName } = useRoute().params;
	const storyUrl = `/storie/${storyName}.html`;
</script>

<template>
	<div class="flex-1 h-[calc(100vh-200px)] flex-col items-center align-middle justify-center">
		<iframe
			v-if="storyUrl"
			:src="storyUrl"
			frameborder="0"
			class="w-full h-full border-none"
			allowfullscreen
		/>
		<div v-else>Caricamento storia...</div>
	</div>
</template>
