<template>
	<div>
		<p>Available pages:</p>
		<ul>
			<li v-for="page in maxProjects" :key="page">
				<NuxtLink :to="`/projects/${page}`" class="underline">
					Project {{ page.id }} - {{ page.title }}
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
		title: "Projects custom title",
		description: "projects custom description",
		bodyAttrs: {
			class: "projects"
		}
	});

	const maxProjects = useProjects();
</script>
