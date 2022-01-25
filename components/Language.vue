<template>
	<div>
		<select v-model="$i18n.locale" class="mb-5">
			<option v-for="l in $i18n.availableLocales" :key="l" :value="l">
				{{ l }}
			</option>
		</select>

		<p>Current translation: {{ $t("text") }}</p>
	</div>
</template>
