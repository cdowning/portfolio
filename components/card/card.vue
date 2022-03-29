<template>
    <div class="card flex flex-col">
        <figure v-if="hasImage" class="card-image">
            <slot name="image"></slot>
        </figure>
        <!-- Required -->
        <div class="card-content">
            <h3><slot name="header"></slot></h3>
            <p><slot></slot></p>
        </div>
        <div class="card-footer">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script lang="ts" src="./card.ts"></script>
