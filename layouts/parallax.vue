<template>
    <div class="parallax-layout">
        <nuxt />
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>

<style lang="scss" scoped>
html {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
    height: 100%;
}

#__nuxt,
.root {
    margin: 0;
    padding: 0;
    perspective: 1px;
    transform-style: preserve-3d;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
.root {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}

.parallax-slide {
    position: relative;
    padding: 25vh 10%;
    min-height: 600px;
    height: 90vh;
    width: 100vw;
    box-sizing: border-box;
    transform-style: inherit;
}
.parallax-slide:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.parallax-slide,
.parallax-slide:before {
    background: 50% 50% / cover;
}

.cover {
    padding: 2rem 0;

    .background {
        height: 100%;
        filter: blur(1px);
        -webkit-filter: blur(1px);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;

        background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 1),
                rgba(255, 255, 255, 0.1),
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
            ),
            linear-gradient(
                to top,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0.2)
            ),
            url('~/assets/images/global/computer-bg-light.jpg') no-repeat top
                left fixed;
        background-size: cover;
    }

    .intro {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: flex-end;

        .text {
            width: 40%;
            min-width: 37.5rem;
            padding: 1.5rem 2rem;
            background-color: rgba($color-cream-00, 0.7);
            color: var(--text-primary);
            // transform: translateZ(0.25px) scale(0.75) translateX(-94%)
            //     translateY(-100%) rotate(2deg);
        }
    }
}

.experience {
    background-color: rgba(#ded5cb, 0.6);
}

.about {
    background-color: rgba($color-cream-00, 1);
    z-index: 1;
    padding: 5vh 15vw;

    .content {
        transform: translateZ(0.25px) scale(0.75);
        transform-origin: 50% 100%;
    }
}

.slide {
    position: relative;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.7);
    transform-style: inherit;
}

.slide:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.7);
}

.title {
    width: 50%;
    padding: 5%;
    border-radius: 5px;
    background: rgba(240, 230, 220, 0.7);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
}

.slide:nth-child(2n) .title {
    margin-left: 0;
    margin-right: auto;
}

.slide:nth-child(2n + 1) .title {
    margin-left: auto;
    margin-right: 0;
}

.slide,
.slide:before {
    background: 50% 50% / cover;
}

.header {
    text-align: center;
    font-size: 175%;
    color: #fff;
    text-shadow: 0 2px 2px #000;
}

#title {
    background-image: url('https://images.unsplash.com/photo-1649179811806-2f7eefb9a4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    z-index: 2;
}

#title h1 {
    transform: translateZ(0.25px) scale(0.75);
    transform-origin: 50% 100%;
}

#slide1:before {
    background-image: url('https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
    transform: translateZ(-1px) scale(2);
}

#slide2 {
    background-image: url('https://images.unsplash.com/photo-1649182974364-c94f3e8bd356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
    z-index: 2;
}

#slide3:before {
    background-image: url('https://images.unsplash.com/photo-1649083048269-8bfb755e7b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80');
    transform: translateZ(-1px) scale(2);
}

#slide4 {
    background: #222;
}
</style>
