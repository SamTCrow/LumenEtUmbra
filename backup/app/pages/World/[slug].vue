<script lang="ts" setup>
	const path = useRoute().path.slice(7);
</script>

<template>
	<div>
		{{ path }}
	</div>
</template>
