<script lang="ts" setup>
	import { Separator } from "@/components/ui/separator";
	import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
	const menuItems = ref([
		{
			label: "Home",
			to: "/",
		},
		{
			label: "Blog",
			to: "/blog/",
		},
		{
			label: "Gioca",
			to: "/play",
		},
		{
			label: "Classi",
			to: "/classes",
			children: [
				{
					label: "Guerriero",
					to: "/classes/guerriero",
				},
				{
					label: "Mago",
					to: "/classes/mago",
				},
				{
					label: "Ladro",
					to: "/classes/ladro",
				},
				{
					label: "Chierico",
					to: "/classes/chierico",
				},
				{
					label: "Paladino",
					to: "/classes/paladino",
				},
				{
					label: "Druido",
					to: "/classes/druido",
				},
				{
					label: "Ranger",
					to: "/classes/ranger",
				},
				{
					label: "Barbaro",
					to: "/classes/barbaro",
				},
				{
					label: "Psionico",
					to: "/classes/psionico",
				},
			],
		},
		{
			label: "Il gioco",
			children: [
				{
					label: "Regolamento",
					to: "/game/rules",
				},
			],
		},
		{
			label: "Il mondo",
			to: "/world",
			children: [
				{
					label: "Aree",
					to: "/world/areas",
				},
				{
					label: "Quest",
					to: "/world/quest",
				},
				{
					label: "Dungeons",
					to: "/world/dungeons",
				},
			],
		},
		{
			label: "Storie",

			children: [
				{
					label: "prova",
					to: "/stories/orfeo",
				},
			],
		},
		{
			icon: "ic:baseline-discord",
			to: "https://discord.gg/nGAnDCKX",
			target: "_blank",
		},
	]);
</script>

<template>
	<div class="mb-4 sticky top-0 bg-gray-900">
		<NavigationMenu
			class="p-2 mx-auto transition-colors duration-200"
			:viewport="false"
		>
			<NavigationMenuList class="gap-4">
				<NavigationMenuItem v-for="item in menuItems">
					<div v-if="item.children && item.children.length > 0">
						<NavigationMenuTrigger
							class="text-lg text-pretty bg-transparent"
						>
							<span v-if="item.label">{{ item.label }}</span>
							<Icon
								v-else
								:name="item.icon"
							/>
							<NavigationMenuContent class="absolute top-full min-w-48">
								<NavigationMenuLink
									as-child
									v-for="children in item.children"
								>
									<NuxtLink :to="children.to">{{ children.label }}</NuxtLink>
								</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuTrigger>
					</div>
					<div v-else>
						<NavigationMenuLink
							as-child
							:class="navigationMenuTriggerStyle()"
							class="text-lg text-pretty bg-transparent"
						>
							<NuxtLink
								v-if="item.label"
								:to="item.to"
							>
								{{ item.label }}
							</NuxtLink>
							<NuxtLink
								v-else
								:to="item.to"
							>
								<Icon
									:name="item.icon"
									size="1.5em"
									class="items-center align-middle"
								/>
							</NuxtLink>
						</NavigationMenuLink>
					</div>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
		<Separator class="bg-accent" />
	</div>
</template>

<style scoped>
	* {
		font-family: "Cinzel", serif;
	}
</style>
