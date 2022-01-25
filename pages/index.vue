<template>
	<container>
		<h1 class="mb-10">
			This is the homepage
		</h1>

		<p class="mb-5">
			Metadata has been injected with the "useMeta" composable
		</p>

		<div class="row">
			<div class="col-12 col-lg-6">
				<Language />
			</div>
			<div class="col-12 col-lg-6">
				<p>Random counter from store:</p>
				<div class="flex space-x-4">
					<button @click="counter--">
						-
					</button>
					<p>{{ counter }}</p>
					<button @click="counter++">
						+
					</button>
				</div>
			</div>
		</div>
	</container>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "default"
	});

	useMeta({
		title: "Homepage custom title",
		description: "homepage custom description",
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

	const counter = useCounter();
</script>
