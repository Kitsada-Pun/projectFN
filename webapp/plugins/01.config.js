export default defineNuxtPlugin((nuxtApp) => {
  const publicConfig = useRuntimeConfig().public
  nuxtApp.provide('publicConfig', publicConfig)
  nuxtApp.provide('apiBaseUrl', publicConfig.apiBaseUrl)
})
