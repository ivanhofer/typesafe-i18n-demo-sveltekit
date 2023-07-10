# typesafe-i18n demo sveltekit

**Here is a [video](https://www.youtube.com/watch?v=C6O5pMMMTG0) for better context.** _SvelteKit has undergone some major changes since this video was published. For the most up-to-date way of handling i18n, please refer to the code in this repository._

This example demonstrates a [`typesafe-i18n`](https://github.com/ivanhofer/typesafe-i18n)-integration with [SvelteKit](https://kit.svelte.dev/).

### LIVE-DEMO: https://typesafe-i18n-demo-sveltekit.vercel.app

It is a basic example and shows:

-  basic i18n setup of three different locales
-  auto-detecting user language preferences
-  full SSR support
-  SEO optimizations
-  locale switching
-  lazy loading of locales
-  persistent locale state via language routes
-  typesafety features of `typesafe-i18n`
-  plural rules
-  locale specific date-formatting
-  [`rel="alternate"` links](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#attr-alternate)
-  [`hreflang` attribute](https://developer.mozilla.org/de/docs/Web/HTML/Element/a#attr-hreflang)

What is missing:

-  opinion how to localize slugs\
   this highly depends where your data comes from. This will probably differ from project to project.

## JavaScript version

You can find the exact same example in a JavaScript only version [here](https://github.com/ivanhofer/typesafe-i18n-demo-sveltekit-jsdoc).\
It offers the same typesafety features but instead of TypeScript files it is written in JavaScript with JsDoc comments.

## learn more

If you want to know more about `typesafe-i18n` head over to the main repo:

### https://github.com/ivanhofer/typesafe-i18n
