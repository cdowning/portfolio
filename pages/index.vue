<template>
    <!-- Page container - flex column -->
    <div class="w-full flex flex-col">
        <!-- Header container - background -->
        <header class="header w-full">
            <!-- <header class="header w-full p-3 md:px-0 md:py-6"> -->
            <!-- Header content -->
            <div
                class="
                    md:container md:mx-auto md:flex-nowrap
                    p-3
                    md:py-6
                    flex
                    items-center
                    flex-wrap
                "
            >
                <logo class="flex-grow sm:flex-grow-0 order-1" :src="logoSrc" />
                <nav class="flex-grow w-full order-3 sm:w-auto sm:order-2">
                    <ol class="sm:text-right">
                        <li class="inline-block mx-1">About</li>
                        <li class="inline-block mx-1">My Skills</li>
                        <li class="inline-block mx-1">Portfolio</li>
                        <li class="inline-block mx-1">Contact</li>
                    </ol>
                </nav>
                <div class="color-mode order-2 sm:order-3">
                    <svg-icon
                        :class="['theme-icon', 'cursor-pointer']"
                        :name="colorIcon"
                        width="24"
                        height="24"
                        @click="onUpdateTheme"
                    />
                </div>
            </div>
        </header>
    </div>
</template>

<script lang="ts" src="./ts/index.ts"></script>
<style lang="scss"></style>
