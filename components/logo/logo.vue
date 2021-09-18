<template>
    <div class="logo">
        <nuxt-link :to="to">
            <img :src="srcPath" :alt="alt" v-bind="$attrs" />
        </nuxt-link>
    </div>
</template>
