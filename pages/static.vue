<template>
    <!-- Page container - flex column -->
    <div class="w-full flex flex-col">
        <!-- Header container - background -->
        <header class="header w-full bg-tan-90 sm:p-2 lg:py-4">
            <!-- Header content -->
            <div class="md:container md:mx-auto flex items-center">
                <logo />
                <nav class="text-white flex-grow">
                    <ol>
                        <li>Hello</li>
                    </ol>
                </nav>
                <div class="color-mode">
                    <svg-icon
                        :class="[
                            'fill-current',
                            'text-white',
                            'cursor-pointer',
                        ]"
                        :name="colorIcon"
                        width="24"
                        height="24"
                        @click="onUpdateTheme"
                    />
                </div>
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
    data() {
        return {};
    },
    computed: {
        colorIcon() {
            const icon = this.$colorMode.value === 'dark' ? 'moon' : 'sun';
            return icon;
        },
    },
    methods: {
        onUpdateTheme() {
            const color = this.$colorMode.value === 'dark' ? 'light' : 'dark';
            this.$colorMode.value = color;
        },
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
