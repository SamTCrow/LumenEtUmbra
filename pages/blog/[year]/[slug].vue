<script lang="ts" setup>
	const path = useRoute().path;
	const { data: blogPost } = useAsyncData(() => queryCollection("blog").path(path).first());
</script>

<template>
	<div
		v-if="blogPost"
		class="prosa"
	>
		<h1 class="border-b border-accent">{{ blogPost.title }}</h1>
      <div class="flex justify-between mb-6 text-lg text-primary">
        <span>{{ blogPost.author }}</span>
        <span>{{ new Date(blogPost.date).toLocaleDateString() }}</span>
      </div>
      <ContentRenderer :value="blogPost" class="border-b border-accent pb-8"/>
      <div><span v-for="tag in blogPost.tags" class="text-sm opacity-70">{{ tag }}</span></div>
	</div>
	<div v-else>Loading...</div>
</template>
