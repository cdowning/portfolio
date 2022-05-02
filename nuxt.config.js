export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Caitlin Hawley - Frontend Developer',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1, viewport-fit=cover"',
            },
            {
                name: 'og:title',
                content: 'Caitlin Hawley',
            },
            {
                name: 'og:site_name',
                content: 'Frontend Developer',
            },
            {
                name: 'og:url',
                content: 'http://www.caitlinhawley.com',
            },
            {
                name: 'og:description',
                content: 'Frontend Developer with a passion for design',
            },
            {
                name: 'og:type',
                content: 'website',
            },
            {
                name: 'og:image',
                content:
                    'http://nuxt.caitlinhawley.com/assets/images/global/computer-bg-square.jpg',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://nuxtjs.org/docs/features/configuration
    css: [
        './assets/scss/fonts',
        './assets/scss/transitions',
        './assets/scss/main',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '~/components', extensions: ['vue'] }],

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
        // https://github.com/nuxt-community/style-resources-module
        '@nuxtjs/style-resources',
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

    // https://color-mode.nuxtjs.org/#configuration
    colorMode: {
        classSuffix: '-mode',
        preference: 'light',
    },

    svgSprite: {
        input: '~/assets/icons/svg',
        defaultSprite: 'icon-sprite',
    },

    styleResources: {
        scss: ['./assets/scss/variables.scss', './assets/scss/mixins.scss'],
    },

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
        cssPath: '~/assets/scss/tailwind.scss',
        exposeConfig: true,
    },

    // https://storybook.nuxtjs.org/setup
    storybook: {
        stories: [
            '~/components/**/*.stories.@(js|jsx|ts|tsx)',
            '~/components/**/*.stories.mdx',
            '~/stories/*.stories.@(js|jsx|ts|tsx)',
            '~/stories/*.stories.mdx',
        ],
        addons: [
            // 'storybook-dark-mode',
            // '@storybook/addon-a11y',
        ],
        // modules: false,
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
