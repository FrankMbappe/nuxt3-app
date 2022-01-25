<template>
	<div>
		<p>Available users:</p>
		<ul class="mb-15">
			<li v-for="user in data" :key="user.id">
				<NuxtLink :to="`/users/${user.id}`" class="underline">
					- {{ user.name }}
				</NuxtLink>
			</li>
		</ul>

		<code>
			<span>Pending: {{ pending }}</span><br>
			<span>Error: {{ error }}</span><br>
			<span>Data: {{ data }}</span>
		</code>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "redactional"
	});

	useMeta({
		title: "Users page custom title",
		description: "Users page custom description",
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
