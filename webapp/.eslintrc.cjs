module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'standard',
  ],

  plugins: ['vue', 'nuxt'],

  rules: {
    'no-undef': 0,

    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': 0,
    'object-curly-spacing': 1,
    'prefer-const': 0,
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-control-regex': 0,
    'vue/max-attributes-per-line': 0,
    'vue/attributes-order': 0,
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': 0,
  },

  globals: {
    importScripts: true,
    // '$': true,
  },
}
