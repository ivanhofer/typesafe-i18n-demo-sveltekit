import { writable } from "svelte/store";

export const page = writable({
    params: {
        lang: "en"
    }
})