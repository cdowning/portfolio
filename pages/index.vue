<template>
    <!-- Page container - flex column -->
    <div class="w-full flex flex-col">
        <!-- Header container - background -->
        <header class="header w-full">
            <!-- <header class="header w-full p-3 md:px-0 md:py-6"> -->
            <!-- Header content -->
            <div class="md:container md:mx-auto p-3 md:py-6 flex items-center">
                <logo :src="logoSrc" />
                <nav class="flex-grow mx-4">
                    <ol class="text-right">
                        <li class="inline-block mx-2">About</li>
                        <li class="inline-block mx-2">My Skills</li>
                        <li class="inline-block mx-2">Portfolio</li>
                        <li class="inline-block mx-2">Contact</li>
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
        return {
            // colorMode: this.$colorMode.value,
        };
    },
    computed: {
        colorIcon() {
            // If no theme is set in settings, defaults to 'light'
            const icon = this.$colorMode.value === 'dark' ? 'moon' : 'sun';
            return icon;
        },
        logoSrc() {
            return `caitlin-hawley-${this.$colorMode.value}.svg`;
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

<style lang="scss"></style>
