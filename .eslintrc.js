/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // Cấu hình Vue3 cơ bản
    'eslint:recommended', // Cấu hình các quy tắc cơ bản của ESLint
    '@vue/typescript/recommended', // Cấu hình TypeScript cho Vue
    'plugin:prettier/recommended', // Cấu hình Prettier cho ESLint
  ],
  parserOptions: {
    ecmaVersion: 2020, // Hỗ trợ ECMAScript 2020
    parser: '@typescript-eslint/parser', // Sử dụng parser TypeScript
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Cảnh báo khi có console trong môi trường production
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Cảnh báo khi có debugger trong môi trường production
    'vue/multi-word-component-names': ['error', { ignores: ['Login', 'Home'] }], // Quy tắc đa từ trong tên component, có thể bỏ qua cho các component phổ biến
    'prettier/prettier': ['error', { endOfLine: 'lf' }], // Quy tắc của Prettier cho line breaks
  },
};
