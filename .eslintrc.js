/*
 * @Author: johnwang
 * @since: 2019-11-02 00:29:39
 * @lastTime: 2019-11-02 11:58:28
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
