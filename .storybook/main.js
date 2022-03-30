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
        // Add your addons here
    ],
});
