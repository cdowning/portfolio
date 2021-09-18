<template>
    <logo />
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
