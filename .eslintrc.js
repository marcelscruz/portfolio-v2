module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'react-app',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},
}