import path from 'path';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    srcDir: path.resolve(__dirname, 'app'),

    css: [
        'vuetify/styles',
    ],

    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&subset=vietnamese',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
            },
        ],
    },

    build: {
        transpile: ['vuetify'],
    },

    vite: {
        define: {
            'process.env.DEBUG': 'false',
        },
    },

    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
        '@nuxtjs/tailwindcss',
    ],
});
