<script lang="ts" setup>
	const path = useRoute().path.slice(9);
</script>

<template>
	<div>{{ path }}</div>
</template>
