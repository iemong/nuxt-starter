const StylelintPlugin = require('stylelint-webpack-plugin')

export default {
    mode: 'universal',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxt/typescript-build',
    ],
    modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv'],
    build: {
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                // Run ESLint on save
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                })
                // Run Stylelint on save
                config.plugins.push(
                    new StylelintPlugin({
                        files: ['**/*.vue', '**/*.scss'],
                    }),
                )
            }
        },
    },
}
