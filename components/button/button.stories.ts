import type { Args, ArgType as BaseArgType } from '@storybook/addons';

// import Icon from '../icon/icon.vue';
import Button from './button.vue';

const colors = ['primary', 'secondary', 'link'];
const sizes = ['sm', 'md', 'lg', 'xl'];
const icons = ['', 'moon', 'sun', 'close', 'menu', 'computer'];

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: { Button },
    args: {
        variant: 'primary',
        size: 'md',
        icon: '',
        outlined: false,
        disabled: false,
        text: 'hello there',
        isFullWidth: false,
    },
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        variant: {
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
        icon: {
            description: 'If button has an icon',
            options: icons,
            control: {
                type: 'select',
            },
            table: {
                // category: 'Slots',
                type: {
                    summary: 'text',
                    defaultValue: { summary: '' },
                },
            },
        },
        text: {
            description: 'Text inside button',
            control: {
                type: 'text',
            },
            table: {
                category: 'Slots',
                type: { summary: 'text' },
                defaultValue: { summary: '' },
            },
        },
    },
};

const Template = (args: Args, { argTypes }: BaseArgType) => ({
    props: Object.keys(argTypes),
    components: { Button },
    template: `
        <Button v-bind="$props">
            {{ text }}
        </Button>`,
});

export const Primary = Template.bind({});
