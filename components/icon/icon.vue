<template>
    <span
        v-if="name"
        :class="[
            'icon',
            { [`text-${color}`]: color },
            { [`icon-${size}`]: size },
        ]"
    >
        <svg :class="['svg-icon']" :width="width" :height="height">
            <use
                v-bind="{
                    'xlink:href': iconPath,
                }"
            />
        </svg>
    </span>
</template>

<script lang="ts" src="./icon.ts"></script>
<style src="./icon.scss" lang="scss" scoped></style>
