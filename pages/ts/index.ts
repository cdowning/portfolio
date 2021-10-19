import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'Index',
    data() {
        return {};
    },
    computed: {
        colorIcon() {
            // If no theme is set in settings, defaults to 'light'
            const icon = this.$colorMode.value === 'dark' ? 'moon' : 'sun';
            return icon;
        },
        logoSrc() {
            return `caitlin-hawley-${this.$colorMode.value}.svg`;
        },
    },
    methods: {
        onUpdateTheme() {
            const color = this.$colorMode.value === 'dark' ? 'light' : 'dark';
            this.$colorMode.value = color;
        },
    },
});
