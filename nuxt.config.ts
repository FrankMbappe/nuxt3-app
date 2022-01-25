import type { IntlifyModuleOptions } from "nuxt3";
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
	buildModules: ["nuxt-windicss", "@intlify/nuxt3"],
	css: ["virtual:windi-base.css", "virtual:windi-utilities.css", "assets/css/bs-grid.min.css"],
    intlify: {
        localeDir: "locales",
        vueI18n: {
            legacy: false,
            locale: "en",
            fallbackLocale: "en",
            globalInjection: true
        }
    }
});

declare module "@nuxt/schema" {
    export interface NuxtConfig {
        intlify?: IntlifyModuleOptions
    }
}
