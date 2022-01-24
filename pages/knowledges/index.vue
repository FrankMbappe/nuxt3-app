<template>
	<div>
		<p>Available pages:</p>
		<ul>
			<li v-for="page in max" :key="page">
				<NuxtLink :to="`/knowledges/${page}`" class="underline"> Knowledge {{ page }} </NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "redactional",
	});

	const max = 5;
</script>
