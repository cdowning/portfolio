export * from '~~/.nuxt-storybook/storybook/preview.js';

import { themes } from '@storybook/theming';

export const parameters = {
    darkMode: {
        classTarget: 'html',
        darkClass: 'dark-mode',
        lightClass: 'lights-on',
        stylePreview: true,
        // Override the default dark theme
        dark: {
            ...themes.dark,
            // brandTitle: 'My custom storybook',
            // brandUrl: 'http://caitlinhawley.com',
            // brandImage: '../assets/images/logo/caitlin-hawley-dark.svg',
        },
        // Override the default light theme
        light: {
            ...themes.normal,
            // brandTitle: 'My custom storybook',
            // brandUrl: 'http://caitlinhawley.com',
            // brandImage: '../assets/images/logo/caitlin-hawley-light.svg',
        },
    },
};
