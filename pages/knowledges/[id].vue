<template>
	<div>
		<p>PENDING: {{ kPending }}</p>
		<p>ERROR: {{ kError }}</p>
		<p>DATA: {{ kData }}</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "redactional"
	});

	const kRoute = useRoute();

	const {
		data: kData,
		pending: kPending,
		error: kError
	} = useFetch(`/api/knowledges?id=${kRoute.params.id}`, {
		pick: ["title", "description"] as any
	});
</script>
