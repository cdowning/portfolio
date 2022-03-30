// https://storybook.js.org/docs/vue/configure/theming

import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import customTheme from './customTheme';

addons.setConfig({
    theme: customTheme,
    // theme: themes.dark,
});
