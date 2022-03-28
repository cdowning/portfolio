import { defineComponent, computed } from '@nuxtjs/composition-api';

const Button = defineComponent({
    name: 'Button',
    props: {
        // Use tailwind bg-color class
        status: {
            type: String,
            default: 'blush',
        },
        size: {
            type: String,
            default: 'md',
        },
        icon: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        outlined: {
            type: Boolean,
            default: false,
        },
        isFullWidth: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context) {
        // const hasIcon = computed(function () {
        //     return !!context.slots.icon;
        // });

        const buttonClasses = computed(function () {
            return [
                'btn-' + props.size,
                { ['btn-' + props.status]: props.status },
                { 'has-icon': !!context.slots.icon },
                { 'w-full': !!props.isFullWidth },
                { 'btn-outlined': !!props.outlined },
            ];
        });

        return {
            // hasIcon,
            buttonClasses,
        };
    },
});

export default Button;
