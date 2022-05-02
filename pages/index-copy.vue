<template>
    <!-- Page container - flex column -->
    <div class="w-full flex flex-col">
        <div class="md:container md:mx-auto p-3 md:py-6">
            <h2 class="text-xl">Portrait Cards</h2>
            <CardGroup :items="items" />
        </div>

        <div class="md:container md:mx-auto p-3 md:py-6">
            <h2 class="text-xl">Landscape Cards</h2>
            <CardGroup :items="items" orientation="landscape" />
        </div>

        <div class="md:container md:mx-auto p-3 md:py-6">
            <h2 class="text-xl">Square Cards</h2>
            <CardGroup :items="items" orientation="square" />
        </div>

        <div class="md:container md:mx-auto p-3 md:py-6">
            <h2>Hello</h2>
            <div
                class="card-group grid grid-cols-3 pb-8 gap-8 card-group-portrait"
            >
                <Card orientation="square">
                    <template #image>
                        <img
                            src="https://images.unsplash.com/photo-1650991768876-2a9a554f268c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="add image alt to object"
                        />
                    </template>
                    <template #header>
                        <h3 class="text-lg">Header (Simple)</h3>
                    </template>
                    <template #content>
                        <p>
                            Tart chupa chups liquorice jelly beans gummi bears
                            bonbon sweet roll halvah bonbon. Dragée cookie
                            shortbread chupa chups pie dessert apple pie
                            fruitcake. Sesame snaps jelly croissant jelly-o
                            apple pie marzipan sesame snaps. Dragée macaroon
                            cake dessert icing. Cookie sugar plum chocolate cake
                            liquorice shortbread donut. Sesame snaps cupcake
                            muffin shortbread fruitcake apple pie pie chocolate
                            bar bonbon. Pudding carrot cake donut donut muffin
                            cotton candy ice cream apple pie pastry. Gingerbread
                            sweet roll donut sweet topping jelly. Wafer lollipop
                            marshmallow gingerbread tart cake carrot cake apple
                            pie. Jujubes icing shortbread cotton candy apple pie
                            carrot cake. Bonbon macaroon chocolate cookie sugar
                            plum sweet macaroon lollipop danish. Gummies
                            tiramisu soufflé bear claw pudding cheesecake.
                            Topping donut sesame snaps pie cotton candy jujubes
                            cheesecake chupa chups. Cotton candy tart topping
                            toffee tart gummi bears cupcake tart sesame snaps.
                        </p>
                    </template>
                </Card>
            </div>
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
            items: [
                {
                    source: 'Unsplash',
                    link: {
                        url: 'caitlinhawley.com',
                        name: 'Caitlin Hawley',
                    },
                    description:
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
                    description:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    likes: 120,
                },
                {
                    header: 'Another header 3',
                    tag: 'web development',
                    image: 'https://images.unsplash.com/photo-1651024954841-dbd597a403bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
                    source: 'iStock',
                    description:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    likes: 20,
                },
                {
                    header: 'Another header 4',
                    tag: 'web development',
                    description:
                        'Chupa chups cotton candy sweet danish sesame snaps sweet roll caramels donut danish. Chocolate bar carrot cake liquorice gummies gummi bears gummies shortbread tiramisu cotton candy.',
                    link: {
                        url: 'google.com',
                        name: 'Google',
                    },
                    likes: 3000,
                },
                {
                    header: 'Another header 3',
                    tag: 'web development',
                    image: 'https://images.unsplash.com/photo-1651444335753-7ef8a5df4efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    source: 'iStock',
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    likes: 20,
                },
            ],
        };
    },
});
</script>
<style lang="scss" src="./scss/index.scss"></style>
