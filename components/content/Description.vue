<script setup lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from "@/components/ui/accordion";
</script>

<template>
	<Accordion
		type="single"
		collapsible
	>
		<AccordionItem value="item-1">
			<AccordionTrigger
				><span class="text-lg">Descrizione</span></AccordionTrigger
			>
			<AccordionContent>
				<slot />
			</AccordionContent>
		</AccordionItem>
	</Accordion>
</template>
