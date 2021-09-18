<template>
    <div>
        <div class="header grid grid-cols-3 gap-4">
            <logo />
        </div>
        <div class="intro">
            <h2>intro section</h2>
        </div>
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
