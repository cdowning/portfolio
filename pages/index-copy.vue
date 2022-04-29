<template>
    <!-- Page container - flex column -->
    <div class="w-full flex flex-col">
        <Dialog
            v-if="dialog.simple"
            :data="dialogContent"
            @close="dialog.simple = false"
        >
            <template #header="{ header }">
                <h2 class="text-xl text-blush-50 text-center">{{ header }}</h2>
            </template>
            <!-- If we don't include the template below - it will use the style in dialog.vue -->
            <template #content="{ details }">
                <p class="text-green-20">{{ details }}</p>
            </template>
        </Dialog>

        <!-- <Dialog v-if="dialog.complex" @close="dialog.complex = false"> -->
        <Dialog v-if="dialog.complex" @close="dialog.complex = false">
            <template #header>
                <h2 class="text-xl text-green-30 text-center">
                    Complex Header
                </h2>
            </template>
            <template #content>
                Tiramisu tart cheesecake soufflé candy chocolate cake wafer
                icing. Gummies donut caramels lollipop oat cake chocolate cake
                carrot cake cotton candy. Chocolate cake cake halvah brownie
                fruitcake candy biscuit lollipop. Icing cupcake lemon drops
                chupa chups bear claw jujubes croissant dessert marshmallow.
                Gingerbread biscuit pie lemon drops chocolate bar icing tootsie
                roll jelly-o. Sweet roll donut danish tart tootsie roll. Pudding
                candy canes apple pie carrot cake icing. Halvah jujubes ice
                cream jujubes shortbread danish. Brownie jelly biscuit liquorice
                biscuit caramels gummi bears. Pie chocolate bar sweet roll
                croissant macaroon. Chupa chups caramels biscuit sugar plum
                cheesecake gummi bears chocolate bar. Gummies lemon drops
                dessert wafer gummies gummies jujubes jujubes. Lemon drops
                dessert topping soufflé jelly donut gummi bears halvah
                liquorice. Cookie muffin lollipop gummies chocolate carrot cake
                cake.
            </template>
        </Dialog>

        <div class="md:container md:mx-auto p-3 md:py-6">
            <Button @click="dialog.simple = !dialog.simple">
                Open Simple Dialog
            </Button>
            <Button @click="dialog.complex = !dialog.complex">
                Open Complex Dialog
            </Button>
            <!-- <CardGroup :items="items" /> -->
        </div>
    </div>
</template>

<!--<script lang="ts" src="./ts/index.ts"></script>-->
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'Index',
    data() {
        return {
            dialog: {
                simple: false,
                complex: false,
            },
            items: [
                {
                    source: 'Unsplash',
                    link: {
                        url: 'caitlinhawley.com',
                        name: 'Caitlin Hawley',
                    },
                    content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                    header: 'This is a header',
                    image: 'https://images.unsplash.com/photo-1650991768876-2a9a554f268c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
                    source: 'Unsplash',
                    link: {
                        url: 'caitlinhawley.com',
                        name: 'Caitlin Hawley',
                    }, // isActionable
                    content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    likes: 120,
                },
                {
                    header: 'Another header 3',
                    tag: 'web development',
                    image: 'https://images.unsplash.com/photo-1651024954841-dbd597a403bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
                    source: 'iStock',
                    content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    likes: 20,
                },
                {
                    header: 'Another header 4',
                    tag: 'web development',
                    content:
                        'Chupa chups cotton candy sweet danish sesame snaps sweet roll caramels donut danish. Chocolate bar carrot cake liquorice gummies gummi bears gummies shortbread tiramisu cotton candy.',
                    link: {
                        url: 'google.com',
                        name: 'Google',
                    },
                    likes: 3000,
                },
            ],
            dialogContent: {
                header: 'Header Text Here',
                details:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
        };
    },
});
</script>
<style lang="scss" src="./scss/index.scss"></style>
