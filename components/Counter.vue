<template>
	<p class="mb-5">Counter from store:</p>

	<div class="flex space-x-4">
		<button class="btn" @click="counter--">
			-
		</button>

		<p class="my-auto">{{ counter }}</p>

		<button class="btn" @click="counter++">
			+
		</button>
	</div>
</template>

<script lang="ts" setup>
	const counter = useCounter();
</script>

<style scoped>
    .btn{
        @apply px-4 py-2 bg-dark-600 rounded;
    }
</style>
