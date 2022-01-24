<template>
	<p>Choose language</p>

	<select v-model="locale">
		<option v-for="l in locales" :key="l" :value="l">
			{{ l }}
		</option>
	</select>

	<p>Date: {{ date }}</p>
</template>

<script lang="ts" setup>
	const locales = useLocales();
	const locale = useLocale();
	const date = useLocaleDate(new Date("1998-08-30"));
</script>
