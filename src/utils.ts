// replaces the locale slug in a relative url
// e.g. /en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = (url: URL, locale: string): string => {
	const [, , ...rest] = url.pathname.split('/')
	return `/${[locale, ...rest].join('/')}${url.search}`
}
