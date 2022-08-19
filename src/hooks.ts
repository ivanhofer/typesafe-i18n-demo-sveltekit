import { detectLocale } from '$i18n/i18n-util'
import type { Handle, RequestEvent } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

export const handle: Handle = async ({ event, resolve }) => {
	// read language slug
	const [, lang] = event.url.pathname.split('/')

	if (!lang) {
		const locale = getPreferredLocale(event)

		return new Response(null, {
			status: 302,
			headers: { 'Location': `/${locale}` }
		})
	}

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) })
}

const getPreferredLocale = (event: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const headers = transformHeaders(event)
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers })

	return detectLocale(acceptLanguageDetector)
}

const transformHeaders = ({ request }: RequestEvent) => {
	const headers: Record<string, string> = {}
	request.headers.forEach((value, key) => (headers[key] = value))

	return headers
}
