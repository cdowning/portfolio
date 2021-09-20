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

        <div @click="onUpdateTheme">Theme: {{ $colorMode.preference }}</div>

        <svg-icon name="sun" />

        <!-- <ColorScheme placeholder="..." tag="span">
            Color mode: <b>{{ $colorMode.preference }}</b>
            <span v-if="$colorMode.preference === 'system'"
                >(<i>{{ $colorMode.value }}</i> mode detected)</span
            >
        </ColorScheme>
        <div>
            <h1>Color mode: {{ $colorMode.value }}</h1>
            <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div> -->
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
    methods: {
        onUpdateTheme() {
            console.log(this.$colorMode);
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
