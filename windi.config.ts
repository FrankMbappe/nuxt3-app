import { defineConfig } from "vite-plugin-windicss"

export default defineConfig({
	transformCSS: "pre",
	attributify: false,
	darkMode: "class",
	extract: {
		include: ["app.vue", "pages/**/*.vue", "layouts/**/*.vue", "components/**/*.vue"],
		exclude: ["node_modules", ".gitignore", ".env"]
	},
	corePlugins: {
		container: false
	},
	theme: {
		extend: {
			inset: {
				unset: "unset"
			}
		}
	}
})
