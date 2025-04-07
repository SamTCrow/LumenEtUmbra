<script lang="ts" setup>
	/// <reference types="../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
	import type { NavigationMenuItem } from "@nuxt/ui";
	import SimpleCard from "./simpleCard.vue";

	const menuItems = ref<NavigationMenuItem[]>([
		{
			label: "Home",
			to: "/",
		},
		{
			label: "Blog",
			to: "/blog",
		},
		{
			label: "Gioca",
			to: "/play",
		},
		{
			label: "Regole",
			to: "/rules",
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
			icon: "ic:baseline-discord",
			to: "https://discord.gg/nGAnDCKX",
			target: "_blank",
		},
	]);
</script>

<template>
	<UNavigationMenu
		:items="menuItems"
		class="w-full justify-center"
		highlight
		variant="link"
		:ui="{
			viewport: 'sm:w-96',
			childList: 'sm:w-96',
		}" />
</template>
