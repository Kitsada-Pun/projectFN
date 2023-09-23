// https://nuxt.com/docs/api/configuration/nuxt-config
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineNuxtConfig({
  ssr: false,
  router: {
    options: {
      hashMode: true,
    },
  },
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/lara-light-indigo/theme.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
  build: {
    transpile: ['primevue'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:7001',
    },
  },
  // vite: {
  //   resolve: {
  //     alias: {
  //       util: 'util/',
  //     },
  //   },
  //   optimizeDeps: {
  //     esbuildOptions: {
  //       // Node.js global to browser globalThis
  //       define: {
  //         global: 'globalThis',
  //       },
  //       // Enable esbuild polyfill plugins
  //       // plugins: [
  //       //   NodeGlobalsPolyfillPlugin({
  //       //     buffer: true,
  //       //     process: true
  //       //   }),
  //       // ],
  //     },
  //   },
  //   build: {
  //     rollupOptions: {
  //       // Enable rollup polyfills plugin
  //       // used during production bundling
  //       plugins: [nodePolyfills()],
  //     },
  //   },
  // },
})
