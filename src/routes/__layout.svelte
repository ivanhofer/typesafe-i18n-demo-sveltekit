<script context="module" lang="ts">
	import { initI18n } from '$i18n/i18n-svelte'
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async () => {
		await initI18n()

		return {}
	}
</script>

<slot />
