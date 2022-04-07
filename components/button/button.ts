import { defineComponent, computed } from '@nuxtjs/composition-api';

const Button = defineComponent({
    name: 'Button',
    // inheritAttrs: true,
    props: {
        type: {
            type: String,
            default: '',
        },
        // location: {
        //     type: String,
        //     default: '',
        // },
        // Use tailwind bg-color class
        status: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'md',
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
            buttonClasses,
        };
    },
});

export default Button;
