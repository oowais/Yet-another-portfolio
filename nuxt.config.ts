// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [["unplugin-icons/nuxt", { autoInstall: true }], "@nuxt/ui"],
  typescript: { strict: true, typeCheck: true },
});
