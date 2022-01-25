<template>
	<div>
		<p>Available users:</p>
		<ul class="mb-15">
			<li v-for="user in data" :key="user.id">
				-
				<NuxtLink :to="`/users/${user.id}`" class="underline">
					{{ user.name }}
				</NuxtLink>
			</li>
		</ul>

		<p class="mb-5">
			Fetch result:
		</p>

		<div class="space-y-2">
			<p>Pending: <code>{{ pending }}</code></p>
			<p>Error: <code>{{ error }}</code></p>
			<p>Data: <code>{{ data }}</code></p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "redactional"
	});

	useMeta({
		title: "Users custom title",
		description: "Users custom description",
		link: [
			{
				rel: "shortcut icon",
				href: "/favicon.png"
			}
		],
		bodyAttrs: {
			class: "users"
		}
	});

	const { data, pending, error } = await useFetch("/api/users?num=3");
</script>
