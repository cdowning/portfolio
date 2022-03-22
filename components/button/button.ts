import { defineComponent } from '@nuxtjs/composition-api';

const Btn = defineComponent({
    name: 'Btn',
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
    computed: {
        buttonClasses(): any {
            return [
                'btn-' + this.size,
                { ['btn-' + this.status]: this.status },
                { 'has-icon': !!this.icon },
                { 'w-full': !!this.isFullWidth },
                { 'btn-outlined': !!this.outlined },
            ];
        },
    },
});

export default Btn;
