// replaces the locale slug in a relative url
// e.g. /en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = ({ pathname, search }: Location, locale: string): string => {
	const [, , ...rest] = pathname.split('/')
	return `/${[locale, ...rest].join('/')}${search}`
}
