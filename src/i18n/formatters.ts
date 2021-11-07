import type { AsyncFormattersInitializer } from 'typesafe-i18n'
import type { Locales, Formatters } from './i18n-types'
import { date } from 'typesafe-i18n/formatters'

export const initFormatters: AsyncFormattersInitializer<Locales, Formatters> = async (locale: Locales) => {
	const formatters: Formatters = {
		simpleDate: date(locale, { day: '2-digit', month: 'short', year: 'numeric' }),
	}

	return formatters
}
