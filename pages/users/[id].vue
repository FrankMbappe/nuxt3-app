<template>
	<div>
		<p class="mb-10">
			Page parameters: {{ route.params }}
		</p>

		<p class="mb-5">
			Requested user:
			<code>
				{{ usersStore.getUserById(Number(route.params.id)) }}
			</code>
		</p>
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
	const usersStore = useUsers();
</script>
