<script lang="ts" setup>
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from "@/components/ui/card";
	import Button from "~/components/ui/button/Button.vue";
	const offset = ref(0);
	const { data: posts, refresh } = useAsyncData(() =>
		queryCollection("blog").order("date", "DESC").limit(10).skip(offset.value).all()
	);
	const { data: totalPosts } = useAsyncData(() => queryCollection("blog").count());
</script>

<template>
	<div class="flex flex-col gap-4">
		<Card
			v-for="post in posts"
			class="w-full md:w-[60%] mx-auto hover:border-accent border transition-colors duration-150"
		>
			<NuxtLink :to="post.path">
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
					<div class="flex justify-between w-full mt-4">
						<span>{{ post.author }}</span>
						<span>{{ new Date(post.date).toLocaleDateString() }}</span>
					</div>
				</CardFooter>
			</NuxtLink>
		</Card>
		<div class="flex justify-between max-w-prose mx-auto w-full my-2">
			<Button
				v-if="offset > 0"
				@click="
					{
						offset -= 10;
						refresh();
					}
				"
				variant="ghost"
				class="hover:cursor-pointer"
				>Post precedenti</Button
			>
			<Button
				variant="ghost"
				class="hover:cursor-pointer"
				v-if="totalPosts && totalPosts - offset > 10"
				@click="
					{
						offset += 10;
						refresh();
					}
				"
				>Post successivi</Button
			>
		</div>
		<ScrollTop />
	</div>
</template>
