<template>
    <!-- Page container - flex column -->
    <div class="w-full flex flex-col">
        <!-- Header container - background -->
        <header class="header w-full">
            <div
                class="md:container md:mx-auto md:flex-nowrap p-3 md:py-6 flex items-center flex-wrap"
            >
                <logo class="flex-grow" :src="logoSrc" />

                <icon
                    :name="icon"
                    color="white"
                    class="cursor-pointer z-10 md:hidden"
                    @click.native="onMobileMenu"
                />
                <nav class="flex-grow w-full hidden pr-3 md:block">
                    <ul class="text-right">
                        <li class="inline-block mx-1">About</li>
                        <li class="inline-block mx-1">My Skills</li>
                        <li class="inline-block mx-1">Portfolio</li>
                        <li class="inline-block mx-1">Contact</li>
                    </ul>
                </nav>
                <div class="color-mode hidden md:block">
                    <svg-icon
                        :class="['theme-icon', 'cursor-pointer']"
                        :name="colorIcon"
                        width="24"
                        height="24"
                        @click="onUpdateTheme"
                    />
                </div>

                <!-- Mobile menu -->
                <ul
                    v-if="mobileMenu"
                    class="menu flex flex-col items-center px-3 py-24 absolute inset-0 justify-between"
                >
                    <li>About</li>
                    <li>Skills</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <div
                        class="color-mode flex cursor-pointer"
                        @click="onUpdateTheme"
                    >
                        <svg-icon
                            class="theme-icon cursor-pointer pr-2"
                            :name="colorIcon"
                            width="24"
                            height="24"
                        />
                        Switch to {{ switchColorTheme }} theme
                    </div>
                </ul>
            </div>
        </header>
        <div class="md:container md:mx-auto p-3 md:py-6">
            <p class="w-full">
                This is a <span class="text-highlight">test</span>
            </p>
            <p class="w-full" lazy>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
                <span class="highlight">
                    also the leap into electronic typesetting, remaining
                    essentially unchanged</span
                >. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            </p>
        </div>
    </div>
</template>

<script lang="ts" src="./ts/index.ts"></script>
<style lang="scss" src="./scss/index.scss"></style>
