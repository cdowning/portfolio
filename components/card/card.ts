import { defineComponent, computed } from '@nuxtjs/composition-api';

const Card = defineComponent({
    name: 'Card',
    props: {},
    setup(props, context) {
        const hasImage = computed(function () {
            return !!context.slots.image;
        });

        return {
            hasImage,
        };
    },
});

export default Card;
