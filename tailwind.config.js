const colors = require('./colors.ts');

// Dark mode guide: https://color-mode.nuxtjs.org/#tailwind-dark-mode-plugin

module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: colors.white,
            black: colors.black,
            blueGray: colors.blueGray,
            tan: colors.tan,
            green: colors.green,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
