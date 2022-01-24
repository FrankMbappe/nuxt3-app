<template>
	<div>
		<p>PENDING: {{ pPending }}</p>
		<p>ERROR: {{ pError }}</p>
		<p>DATA: {{ pData }}</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "redactional"
	});

	const pRoute = useRoute();

	const {
		data: pData,
		pending: pPending,
		error: pError
	} = useFetch(`/api/knowledges?id=${pRoute.params.id}`, {
		pick: ["title", "description"] as any
	});
</script>
