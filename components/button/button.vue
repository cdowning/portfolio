<template>
    <button :class="['btn flex', ...buttonClasses]" :disabled="disabled">
        <Icon v-if="icon" :icon="icon" size="md" />
        <span :class="['text', icon ? 'pl-3' : '']"><slot /></span>
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="./button.scss" lang="scss" scoped></style>
