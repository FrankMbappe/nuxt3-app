<template>
	<p class="mb-5">
		Pinia store:
	</p>

	<div class="flex space-x-4">
		<p>How many users to fetch?</p>
		<input v-model="userNumber" type="number" min="1" max="10" class="bg-dark-500 text-center text-gray-50">

		<button class="btn" @click="usersStore.setUsers(userNumber)">
			Fetch
		</button>
	</div>

	<p class="mt-5">
		Currently there are {{ usersStore.getUsers.length }} users in store (times fetch was executed: {{ usersStore.getEdits }})
	</p>
</template>

<script lang="ts" setup>
	const userNumber = ref(1);
	const usersStore = useUsers();
</script>

<style scoped>
    .btn{
        @apply px-4 py-2 bg-dark-600 rounded;
    }
</style>
