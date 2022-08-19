import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from '@sveltejs/kit'
import type { Locales } from '$i18n/i18n-types'
import { replaceLocaleInUrl } from '../utils'
import { baseLocale, locales } from '$i18n/i18n-util'
import { loadLocaleAsync } from '$i18n/i18n-util.async'

type LoadParams = {
	lang?: Locales
}

export const load: LayoutLoad<LoadParams> = async ({ url, session, params }) => {
	const lang = params.lang

	// redirect to preferred language if user comes from page root
	if (!lang) {
		throw redirect(302, `/${session.locale}`);
	}

	// redirect to base locale if language is not present
	if (!locales.includes(lang)) {
		throw redirect(302, replaceLocaleInUrl(url.pathname, baseLocale));
	}

	// delete session locale since we don't need it to be sent to the client
	delete session.locale

	await loadLocaleAsync(lang)

	return { locale: lang }
}
