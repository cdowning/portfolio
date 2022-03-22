import type { Args, ArgType as BaseArgType } from '@storybook/addons';

import Btn from './button.vue';

const colors = ['primary', 'secondary'];
const sizes = ['sm', 'md', 'lg', 'xl'];

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: Btn,
    args: {
        status: 'primary',
        size: 'md',
        icon: '',
        outlined: false,
        disabled: false,
    },
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        status: {
            description: 'Color of the button',
            options: colors,
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'primary' },
            },
            control: { type: 'select' },
        },
        size: {
            description: 'Size of the button',
            options: sizes,
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'md' },
            },
            control: { type: 'select' },
        },
        outlined: {
            description: 'Outline button style',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: { type: 'boolean' },
        },
        disabled: {
            description: 'If the button is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: { type: 'boolean' },
        },
    },
};

const Template = (args: Args, { argTypes }: BaseArgType) => ({
    props: Object.keys(argTypes),
    components: { Btn },
    template: `<btn :status="status" :size="size" :disabled="disabled" :outlined="outlined">Hello</btn>`,
});

export const Primary = Template.bind({});
