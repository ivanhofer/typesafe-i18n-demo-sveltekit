<script context="module" lang="ts">
	import { session } from '$app/stores'

	import { initI18n } from '$i18n/i18n-svelte'
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async ({ session }) => {
		await initI18n(session.locale)

		return {}
	}
</script>

<slot />
