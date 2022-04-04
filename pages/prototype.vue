<template>
    <!-- root element -->
    <div class="w-full flex flex-col">
        <!-- Full width cover -->
        <section class="cover">
            <header class="container flex items-center mx-auto py-6 w-5/6">
                <Logo />
                <nav
                    class="flex-grow w-full pr-3 flex justify-center items-center"
                >
                    <a class="flex items-center mx-6">
                        <Icon
                            class="cursor-pointer mx-2"
                            color="gray-30"
                            icon="female"
                        />
                        About
                    </a>
                    <a class="flex items-center mx">
                        <Icon
                            class="cursor-pointer mx-2"
                            color="gray-30"
                            icon="briefcase"
                        />
                        Experience
                    </a>
                    <a class="flex items-center mx-1">
                        <Icon
                            class="cursor-pointer mx-2"
                            color="gray-30"
                            icon="envelope"
                        />
                        Contact
                    </a>
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
            </header>
        </section>
        <section class="about">
            <div class="container mx-auto py-6 w-5/6">
                <h3>Who is Caitlin?</h3>
                <h2>About me</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./ts/prototype.ts"></script>
<style lang="scss" src="./scss/prototype.scss"></style>
