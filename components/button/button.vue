<template>
    <button :class="['btn', ...buttonClasses]" :disabled="disabled">
        <slot />
        <q-icon v-if="icon" :icon="icon" />
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="./button.scss" lang="scss" scoped></style>
