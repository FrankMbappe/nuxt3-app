<template>
	<div>
		<p>PENDING: {{ pending }}</p>
		<p>ERROR: {{ error }}</p>
		<p>DATA: {{ data }}</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "redactional"
	});

	const route = useRoute();

	const { data, pending, error } = useFetch(`/api/projects?id=${route.params.id}`, {
		pick: ["title", "description"] as any
	});
</script>
