module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    settings: {
        'import/resolver': {
            'babel-module': {
                root: '.',
                alias: {
                    '~': './',
                    '@': './',
                    '~~': '.',
                    '@@': '.',
                },
            },
        },
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/vue',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier', 'vue', 'import'],
    ignorePatterns: ['ts-shim.d.ts'],
    // add your custom rules here
    rules: {
        'prettier/prettier': ['error'],
    },
}
