<template>
    <div :class="['card flex', cardClasses]">
        <!-- Show placeholder if no image? -->
        <figure
            v-if="image && showImagePlaceholder && useData"
            class="card-image"
        >
            <slot name="image" v-bind="{ source, image }">
                <img :src="image" />
            </slot>
        </figure>
        <figure v-else class="card-image card-image-placeholder">
            <slot name="image" v-bind="{ source, image }">
                <img
                    :src="imagePath"
                    :class="[orientation === 'landscape' ? 'w-8/12' : 'w-6/12']"
                />
            </slot>
        </figure>
        <!-- <figure v-else class="card-image">
            <slot name="image"> </slot>
        </figure> -->
        <!-- <slot name="image" v-bind="{ source, image }">
            <figure v-if="image && showImagePlaceholder" class="card-image">
                <img :src="image" class="object-cover" />
            </figure>
            <figure v-else class="card-image card-image-placeholder">
                <img
                    :src="imagePath"
                    :class="[
                        'object-contain m-auto',
                        orientation === 'landscape' ? 'w-8/12' : 'w-6/12',
                    ]"
                />
            </figure>
        </slot> -->

        <div class="card-content flex flex-col">
            <div class="card-details">
                <slot name="header" v-bind="{ header }">
                    <h3 class="text-lg">
                        {{ header }}
                    </h3>
                </slot>
                <slot name="content" v-bind="{ description }">
                    <p>{{ description }}</p>
                </slot>
            </div>
            <slot name="footer" v-bind="{ link }">
                <Button
                    v-if="link"
                    variant="primary"
                    size="sm"
                    outlined
                    is-full-width
                    class="mb-2"
                >
                    {{ link.name }}
                </Button>
                <!-- <a
                v-if="link"
                class="inline-block"
                :href="link.url"
                :title="link.name"
            >
                {{ link.name }}
            </a> -->
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    computed,
    toRefs,
    ref,
} from '@nuxtjs/composition-api';

export const CARD_CLASS_PREFIX = 'card-';
export const BORDER_CLASS_PREFIX = 'border-';

export default defineComponent({
    name: 'Card',
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        orientation: {
            type: String,
            default: 'portrait', // portrait, square, landscape
        },
        isRounded: {
            type: Boolean,
            default: false,
        },
        // Boolean for imagePlaceholder
        // Ability to customize placeholder - but have default
        imagePlaceholder: {
            type: String,
            default: '',
        },
        showImagePlaceholder: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, context) {
        const data = ref(props.item);
        const useData = !!data.value;

        const imagePath = computed<string>(() => {
            const path =
                props.imagePlaceholder ||
                require('~/assets/images/global/code-tag.svg');
            return path;
        });
        const cardClasses = computed<object>(() => {
            return [
                'card-' + props.orientation,
                {
                    'flex-col':
                        props.orientation === 'portrait' ||
                        props.orientation === 'square',
                },
                { 'rounded-lg': !!props.isRounded },
                // { [CARD_CLASS_PREFIX + props.shape]: !!props.shape },
            ];
        });

        return {
            useData,

            header: data.value?.header,
            description: data.value?.description,
            image: data.value?.image,
            source: data.value?.source,
            link: data.value?.link,

            // Computed
            cardClasses,
            imagePath,
        };
    },
});
</script>
<style src="./card.scss" lang="scss" scoped></style>
