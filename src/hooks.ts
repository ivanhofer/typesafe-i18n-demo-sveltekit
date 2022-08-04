import { detectLocale } from '$i18n/i18n-util'
import type { GetSession, Handle } from '@sveltejs/kit'
import type { RequestEvent } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

const htmlLanguageAttributeReplacer =
	(locale: string) =>
	({ html }) =>
		html.replace('<html lang="en">', `<html lang="${locale}">`)

export const handle: Handle = async ({ event, resolve }) => {
	// read language slug
	const [, lang] = event.url.pathname.split('/')

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: htmlLanguageAttributeReplacer(lang) })
}

export const getSession: GetSession = (event) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const headers = getHeaders(event)
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers })
	const locale = detectLocale(acceptLanguageDetector)

	return {
		locale,
	}
}

const getHeaders = (event: RequestEvent) => {
	const headers: Record<string, string> = {}
	event.request.headers.forEach((value, key) => (headers[key] = value))

	return headers
}
