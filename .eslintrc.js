module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  plugins: ['vue', 'html', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'prettier/prettier': 'error',
  },
}
