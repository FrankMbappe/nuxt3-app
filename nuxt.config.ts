import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
	buildModules: ["nuxt-windicss"],
	css: ["virtual:windi-base.css", "virtual:windi-utilities.css", "assets/css/bs-grid.min.css"],
});
