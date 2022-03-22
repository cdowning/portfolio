const colors = require('./colors.ts');

// Dark mode guide: https://color-mode.nuxtjs.org/#tailwind-dark-mode-plugin

// If I need to reference variables in TS - https://tailwindcss.com/docs/configuration#referencing-in-java-script

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
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
