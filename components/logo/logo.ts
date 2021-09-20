import { defineComponent } from '@nuxtjs/composition-api';

const Logo = defineComponent({
    name: 'Logo',
    props: {
        to: {
            type: String,
            default: '/',
        },
        src: {
            type: String,
            default: 'caitlin-hawley-light.svg',
        },
        alt: {
            type: String,
            default: '',
        },
    },
    computed: {
        srcPath(): string {
            return require(`~/assets/images/logo/${this.src}`);
        },
    },
});

export default Logo;
