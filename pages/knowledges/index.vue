<template>
	<div>
		<p>Available pages:</p>
		<ul>
			<li v-for="page in maxKnowledges" :key="page">
				<NuxtLink :to="`/projects/${page}`" class="underline">
					Knowledge {{ page.id }} - {{ page.title }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "redactional"
	});

	useMeta({
		title: "Knowledges custom title",
		description: "knowledges custom description",
		bodyAttrs: {
			class: "knowledges"
		}
	});

	const maxKnowledges = useKnowledges();
</script>
