/// <reference types="@sveltejs/kit" />

type Locales = import('$i18n/i18n-types').Locales

declare namespace App {
	// interface Locals { }

	// interface Platform { }

	interface Session {
		locale: Locales
	}

	// interface Stuff { }
}