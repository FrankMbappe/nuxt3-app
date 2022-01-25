<h2 align="center">
Nuxt 3 starter template
</h2><br>

<pre align="center">
(WIP) - basic template, nothing fancy (inspired by <a href="https://github.com/antfu/vitesse" target="_blank">@antfu vitesse</a>)
</pre>

<p align="center">
<br>
<a href="https://ns-development.netlify.app/">🖥 Online Preview</a> 
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ebb8a49f-1ef6-4a5a-a732-0dd65c6e8638/deploy-status)](https://app.netlify.com/sites/ns-development/deploys)

### Features

- [💚 Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ [Vite](https://vitejs.dev/) - Instant HMR

- 🎨 [WindiCSS](https://windicss.org/utilities/) - The next generation utility-first CSS framework.

- 🌍 [I18n](https://vue-i18n.intlify.dev/) - Language support

- 🔥 The `<script setup>` syntax

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy

- 🦾 TypeScript by default

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs
- [WindiCSS](https://github.com/windicss/windicss) - the next generation utility-first CSS framework
- [I18n](https://github.com/intlify/nuxt3) - multi language support

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

- Other hosting solutions [here](https://v3.nuxtjs.org/docs/deployment/presets)