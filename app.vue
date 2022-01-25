<template>
	<div>
		<NuxtPage />
	</div>
</template>

<style lang="scss">
	body {
		@apply min-h-screen relative overflow-x-hidden bg-dark-800;
	}

    option, select, code{
        @apply bg-dark-200;
    }

    code.info{
        @apply px-2 py-1 ml-2 rounded;
    }

    div, p, a{
        @apply text-gray-50
    }
</style>
