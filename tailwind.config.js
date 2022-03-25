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
        fontFamily: {
            // https://tailwindcss.com/docs/font-family
            poppins: ['Poppins', '-apple-system', 'sans-serif'],
            lato: [
                'Lato',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            // Add Lobster?
            milkshake: ['Milkshake', '-apple-system', 'serif'],
        },
        // https://type-scale.com/ - Major Third (base 16px)
        fontSize: {
            xs: '0.64rem', // 10.24px
            sm: '0.8rem', // 12.80px
            base: '1rem', // based on 16px base
            md: '1.25rem', // 20.00px
            lg: '1.563rem', // 25.00px
            xl: '1.953rem', // 31.25px
            '2xl': '2.441rem', // 20.00px
            '3xl': '3.052rem', // 48.83px
            '4xl': '3.815rem', // 61.04px
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
