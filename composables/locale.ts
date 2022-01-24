import type { Ref } from "vue";

export const useDefaultLocale = (fallback = "en-US") => {
    const locale = ref(fallback);
  if (process.server) {
    const nuxtApp = useNuxtApp();
    const reqLocale = nuxtApp.ssrContext?.req.headers["accept-language"]?.split(",")[0];
    if (reqLocale)
      locale.value = reqLocale;
  } else if (process.client) {
    const navLang = navigator.language;
    if (navLang)
      locale.value = navLang;
  }
  return locale;
};
export const useLocale = () => useState<string>("locale", () => useDefaultLocale().value);

export const useLocales = () => {
  const locale = useLocale();
  const locales = ref([
    "en",
    "it",
    "de"
  ]);
  if (!locales.value.includes(locale.value))
    locales.value.unshift(locale.value);

  return locales;
};

export const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
  return computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: "full" }).format(unref(date)));
};
