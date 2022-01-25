<template>
	<div>
		<p class="mb-5">
			Locale switcher:
		</p>

		<div class="flex space-x-3">
			<label for="switcher">Language:</label>
			<select id="switcher" v-model="$i18n.locale" class="border rounded border-gray-500 min-w-15 mb-5">
				<option v-for="l in $i18n.availableLocales" :key="l" :value="l">
					{{ l }}
				</option>
			</select>
		</div>

		<p>
			Current translation:
			<span class="font-bold">{{ $t("text") }}</span>
		</p>
	</div>
</template>
