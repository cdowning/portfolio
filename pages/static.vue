<template>
    <!-- Page container - flex column -->
    <div class="w-full flex flex-col">
        <!-- Header container - background -->
        <header class="header w-full bg-tan-90 sm:p-2 lg:py-4">
            <!-- Header content -->
            <div class="lg:w-10/12 m-auto flex items-center">
                <logo />
                <nav class="text-white">
                    <ol>
                        <li>Hello</li>
                    </ol>
                </nav>
            </div>
        </header>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Logo from '~/components/logo/logo.vue';

export default defineComponent({
    name: 'Index',
    components: {
        Logo,
    },
});
</script>

<style lang="scss">
html {
    height: 100%;
}
body {
    min-height: 100%;
    background-color: #fff7f1;
}
</style>
