<template>
    <div class="w-full flex flex-col">
        <header-bar class="w-full">
            <!-- <div slot="logo"> -->
            <logo slot="logo" />
            <!-- </div> -->
        </header-bar>
        <!-- <div class="header grid grid-cols-3 gap-4"> -->
        <div class="intro">
            <h2>intro section</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import HeaderBar from '~/components/header/header.vue';
import Logo from '~/components/logo/logo.vue';

export default defineComponent({
    name: 'Index',
    components: {
        Logo,
        HeaderBar,
    },
});
</script>
