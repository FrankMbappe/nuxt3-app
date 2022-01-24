<template>
	<div>
		<p>This is the homepage</p>

		<Language />
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "default"
	});

	useMeta({
		title: "Homepage custom title",
		description: "homepage custom description",
		bodyAttrs: {
			class: "homepage"
		}
	});
</script>
