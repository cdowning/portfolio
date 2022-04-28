const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js');

module.exports = nuxifyStorybook({
    webpackFinal(config, options) {
        // extend config here

        return config;
    },
    stories: [
        // Add your stories here
        '~/components/**/*.stories.@(js|jsx|ts|tsx)',
        '~/components/**/*.stories.mdx',
        '~/stories/*.stories.@(js|jsx|ts|tsx)',
        '~/stories/*.stories.mdx',
    ],
    addons: [
        'storybook-dark-mode',
        // '@storybook/addon-a11y' // This is throwing an error
    ],
});
