<template>
    <div :class="['card-group grid pb-8 gap-8', cardGroupClasses]">
        <!-- v-if="items" - https://v2.vuejs.org/v2/style-guide/?redirect=true#Avoid-v-if-with-v-for-essential -->
        <Card
            v-for="(item, index) in items"
            :key="index"
            :item="item"
            :orientation="orientation"
        >
        </Card>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    computed,
} from '@nuxtjs/composition-api';

export const CARDS_CLASS_PREFIX = 'card-group-';

export default defineComponent({
    name: 'CardGroup',
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        // This should probably be on the card
        orientation: {
            type: String,
            default: 'portrait',
        },
        // rounded or square - change this to a boolean? isRounded?
        shape: {
            type: String,
            default: '',
        },
    },
    setup(props, context) {
        const cardGroupClasses = computed<object>(() => {
            return [CARDS_CLASS_PREFIX + props.orientation];
        });

        return { cardGroupClasses };
    },
});
</script>

<style lang="scss" scoped>
.card-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(304px, 1fr));

    // TODO: Add a class to tailwind config
    &.card-group-landscape {
        // @apply grid-cols-2;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
    &.card-group-square {
        // @apply grid-cols-3;
        grid-template-columns: repeat(auto-fit, minmax(304px, 1fr));
    }
}
</style>
