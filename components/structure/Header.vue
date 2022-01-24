<template>
	<nav class="fixed bg-dark-500 top-0 inset-x-0">
		<container class="flex justify-between py-3">
			<NuxtLink to="/">
				Home
			</NuxtLink>

			<div class="space-x-3">
				<NuxtLink to="/knowledges">
					Knowledges
				</NuxtLink>
				<NuxtLink to="/projects">
					Projects
				</NuxtLink>
			</div>
		</container>
	</nav>
</template>
