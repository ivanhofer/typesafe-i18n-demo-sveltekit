import { loadLocaleAsync } from "../src/i18n/i18n-util.async"
import { setLocale } from "../src/i18n/i18n-svelte"
import { baseLocale,locales } from "../src/i18n/i18n-util"
import type { Locales } from "../src/i18n/i18n-types"
import "../src/styles/global.scss"

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const loaders = [
    async () => {
        let locale = baseLocale
        if (locales.includes(navigator.language as Locales)) {
            // locale set in browser apparently doesn't propagate to story iframe
            locale = navigator.language as Locales
        }
        console.log("Navigator locale", navigator.language)
        console.log("Active locale", locale)
        await loadLocaleAsync(locale)
        setLocale(baseLocale)
    }
]