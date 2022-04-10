<template>
    <div
        :class="[
            'card flex',
            orientation === 'landscape' ? '' : 'flex-col',
            ...cardClasses,
        ]"
    >
        <figure class="card-image flex flex-col justify-center items-center">
            <slot name="image"></slot>
        </figure>
        <!-- Required -->
        <div class="card-content">
            <h3 class="text-lg"><slot name="header"></slot></h3>
            <p><slot></slot></p>
        </div>
        <div class="card-footer">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script lang="ts" src="./card.ts"></script>
<style src="./card.scss" lang="scss" scoped></style>
