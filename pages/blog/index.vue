<script lang="ts" setup>
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from "@/components/ui/card";
	const { data: posts } = useAsyncData(() => queryCollection("blog").all());
	
</script>

<template>
	<div class="flex flex-col gap-4">
		<Card
			v-for="post in posts"
			class="w-[60%] mx-auto hover:opacity-85"
		>
			<CardHeader>
				<CardTitle class="text-2xl font-bold">{{ post.title }}</CardTitle>
				<CardDescription>{{ post.description }}</CardDescription>
			</CardHeader>
			<CardContent>
				<ContentRenderer
					:value="post"
					class="prosa line-clamp-4"
				/>
			</CardContent>
			<CardFooter>
				<div class="flex justify-between w-full">
					<span>{{ post.author }}</span>
					<span>{{ new Date(post.date).toLocaleDateString() }}</span>
				</div>
			</CardFooter>
		</Card>
	</div>
</template>
