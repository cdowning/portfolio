import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'Prototype',
    data() {
        return {
            mobileMenu: false,
            icon: 'menu',
            switchColorTheme:
                this.$colorMode.value === 'dark' ? 'light' : 'dark',
        };
    },
    computed: {
        colorIcon() {
            // If no theme is set in settings, defaults to 'light'
            const icon = this.$colorMode.value === 'dark' ? 'sun' : 'moon';
            return icon;
        },
        logoSrc() {
            return `caitlin-hawley-${this.$colorMode.value}.svg`;
        },
        mobileIcon() {
            return this.icon === 'menu' ? 'menu' : 'close';
        },
    },
    methods: {
        onUpdateTheme() {
            const color = this.$colorMode.value === 'dark' ? 'light' : 'dark';
            this.$colorMode.value = color;
        },
        onMobileMenu() {
            this.mobileMenu = !this.mobileMenu;
            this.icon = this.icon === 'menu' ? 'close' : 'menu';
        },
    },
});
