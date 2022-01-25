<template>
	<div>
		<p class="mb-10">Page parameters: {{ route.params }}</p>

		<p class="mb-5">
			Fetch result:
		</p>

		<div class="space-y-2">
			<p>Pending: <code>{{ status }}</code></p>
			<p>Error: <code>{{ err }}</code></p>
			<p>Data: <code>{{ user }}</code></p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "detail"
	});

	useMeta({
		title: "User custom title",
		description: "User custom description",
		link: [
			{
				rel: "shortcut icon",
				href: "/favicon.png"
			}
		],
		bodyAttrs: {
			class: "single_user"
		}
	});

	const route = useRoute();

	const {
		data: user,
		pending: status,
		error: err
	} = await useFetch(`/api/users?id=${route.params.id}`);
</script>
