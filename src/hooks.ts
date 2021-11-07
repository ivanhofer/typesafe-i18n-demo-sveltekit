import { detectLocale } from '$i18n/i18n-util'
import type { GetSession } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

export const getSession: GetSession = (request) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)
	const locale = detectLocale(acceptLanguageDetector)

	return {
		locale,
	}
}
