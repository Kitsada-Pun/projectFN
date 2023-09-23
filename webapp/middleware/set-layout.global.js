export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.match(/\/app.*$/)) {
    return setPageLayout('app')
  }
})
