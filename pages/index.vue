<template>
	<div>
		<p class="text-center text-3xl mb-20">
			This is the homepage
		</p>

		<div class="row justify-between">
			<div class="col-12 col-lg-5">
				<Language />
			</div>
			<div class="col-12 col-lg-5">
				<Users />
			</div>
		</div>

		<p class="text-gray-500 mt-15">
			Note: metadata has been injected with the "useMeta" composable
		</p>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "default"
	});

	useMeta({
		title: "Homepage custom title",
		description: "Homepage custom description",
		link: [
			{
				rel: "shortcut icon",
				href: "/favicon.png"
			}
		],
		bodyAttrs: {
			class: "homepage"
		}
	});
</script>

<style scoped>
    .row > .col-12{
        @apply bg-dark-200 rounded p-3;
    }
</style>
