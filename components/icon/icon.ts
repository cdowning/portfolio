import { defineComponent } from '@nuxtjs/composition-api';

import SvgSprite from '@/assets/sprite/gen/icon-sprite.svg';

const Icon = defineComponent({
    name: 'Icon',
    props: {
        name: {
            type: String,
            default: '',
            required: true,
        },
        width: {
            type: Number,
            default: 24,
        },
        height: {
            type: Number,
            default: 24,
        },
        size: {
            type: String, // sm, md, lg.
            default: '',
        },
        // Could use tailwind color classes
        color: {
            type: String,
            default: '',
        },
    },
    computed: {
        iconPath(): string {
            return `${SvgSprite}#i-${this.name}`;
        },
    },
});

export default Icon;
