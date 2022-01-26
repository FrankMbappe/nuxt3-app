<template>
	<div>
		<p>Available users (from store, faster than another fetch):</p>
		<ul class="mb-15">
			<li v-for="user in usersStore.getUsers" :key="user.id">
				-
				<NuxtLink :to="`/users/${user.id}`" class="underline">
					{{ user.name }}
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

	const usersStore = useUsers();
</script>
