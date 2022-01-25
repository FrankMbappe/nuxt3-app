<h2 align="center">
Nuxt 3 starter template
</h2><br>

<pre align="center">
(WIP) - basic template, nothing fancy
</pre>

<p align="center">
<br>
<a href="https://ns-development.netlify.app/">🖥 Online Preview</a>
</p>

### Features

- [💚 Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ [Vite](https://vitejs.dev/) - Instant HMR

- 🎨 [WindiCSS](https://windicss.org/utilities/) - The next generation utility-first CSS framework.

- 🔥 The `<script setup>` syntax

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy

- 🦾 TypeScript by default

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs
- [WindiCSS](https://github.com/windicss/windicss) - the next generation utility-first CSS framework

### How to use

```sh
npx degit NicolaSpadari/nuxt-app my-nuxt3-app
cd my-nuxt3-app
npm i
```

### Deployment

- Easiest method: deploy on Netlify as a classic web app, make sure the `netlify.toml` has the correct build command:

```toml
[build]
    ...
    command = "npm i && npm run build"
    ...
```