<template>
	<div>
		<p class="mb-10">User id: {{ route.params }}</p>

		<code>Pending: {{ status }}</code><br>
		<code>Error: {{ err }}</code><br>
		<code>Result: {{ user }}</code>
	</div>
</template>

<script lang="ts" setup>
	const route = useRoute();

	const {
		data: user,
		pending: status,
		error: err
	} = await useFetch(`/api/users?id=${route.params.id}`);
</script>
