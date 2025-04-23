<script lang="ts" setup>
	// TODO aggiungere immagini alle classi
	const classes = [
		{
			label: "Guerriero",
			image: "warrior.png",
			to: "/classes/guerriero",
		},
		{
			label: "Mago",
			image: "",
			to: "/classes/mago",
		},
		{
			label: "Ladro",
			image: "",
			to: "/classes/ladro",
		},
		{
			label: "Chierico",
			image: "",
			to: "/classes/Chierico",
		},
		{
			label: "Paladino",
			image: "",
			to: "/classes/paladino",
		},
		{
			label: "Druido",
			image: "",
			to: "/classes/druido",
		},
		{
			label: "Ranger",
			image: "",
			to: "/classes/ranger",
		},
		{
			label: "Barbaro",
			image: "",
			to: "/classes/barbaro",
		},
		{
			label: "Psionico",
			image: "",
			to: "/classes/psionico",
		},
		{
			label: "Monaco",
			image: "",
			to: "/classes/monaco",
		},
	];
</script>

<template>
	<div class="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		<NuxtLink
			:to="classe.to"
			v-for="classe in classes"
			class="relative size-52 items-center flex justify-center mx-auto border-2 border-accent rounded-md align-middle hover:border-primary transition-colors duration-200"
		>
			<div
				:class="`absolute inset-0 bg-cover bg-center opacity-60 bg-[url(/images/${classe.image})] `"
			></div>
			<span class="text-3xl font-medium text-shadow-lg text-shadow-black z-10">
				{{ classe.label }}
			</span>
		</NuxtLink>
	</div>
</template>
