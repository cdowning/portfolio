const colors = require('./colors.ts');

// Dark mode guide: https://color-mode.nuxtjs.org/#tailwind-dark-mode-plugin

module.exports = {
    // mode: 'jit',
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            white: colors.white,
            black: colors.black,
            blueGray: colors.blueGray,
            tan: colors.tan,
            green: colors.green,
            gray: colors.gray,
            yellow: colors.yellow,
            midnight: colors.midnight,
            olive: colors.olive,
            blush: colors.blush,
            cream: colors.cream,
        },
        // screens: {
        //     '2xl': { max: '1535px' },
        //     // => @media (max-width: 1535px) { ... }

        //     xl: { max: '1279px' },
        //     // => @media (max-width: 1279px) { ... }

        //     lg: { max: '1023px' },
        //     // => @media (max-width: 1023px) { ... }

        //     md: { max: '767px' },
        //     // => @media (max-width: 767px) { ... }

        //     sm: { max: '639px' },
        //     // => @media (max-width: 639px) { ... }
        // },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
