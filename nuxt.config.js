export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Caitlin Hawley',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://nuxtjs.org/docs/features/configuration
    css: [
        './assets/css/tailwind.css',
        './assets/scss/fonts',
        './assets/scss/main',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '~/components', extensions: ['vue'] }],

    colorMode: {
        classSuffix: '-mode',
    },

    svgSprite: {
        input: '~/assets/icons/svg',
        defaultSprite: 'icon-sprite',
    },

    server: {
        port: 8000, // default is 3000
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://composition-api.nuxtjs.org/
        '@nuxtjs/composition-api/module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://github.com/nuxt-community/svg-sprite-module
        '@nuxtjs/svg-sprite',
        // https://image.nuxtjs.org/
        '@nuxt/image',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://color-mode.nuxtjs.org/
        '@nuxtjs/color-mode',
        // https://github.com/vanhoofmaarten/nuxt-mq
        'nuxt-mq',
    ],

    mq: {
        defaultBreakpoint: 'sm',
        breakpoints: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
        },
    },

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: true,
        config: {},
        injectPosition: 0,
    },

    // https://storybook.nuxtjs.org/setup
    storybook: {
        stories: [
            '~/components/**/*.stories.@(js|jsx|ts|tsx)',
            '~/components/**/*.stories.mdx',
            '~/stories/*.stories.@(js|jsx|ts|tsx)',
            '~/stories/*.stories.mdx',
        ],
        // NOTE: The order of these addons is the order they will appear in the tabs
        addons: [
            // '@storybook/addon-controls',
            // '@storybook/addon-actions',
            // '@storybook/addon-a11y',
        ],
        modules: {
            exclude: ['@nuxtjs/svg-sprite'],
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            compact: true,
        },
    },
};
