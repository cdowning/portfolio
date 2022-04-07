<template>
    <!-- root element -->
    <div class="w-full flex flex-col">
        <!-- Created a background element for blur and potential parallax -->
        <div class="background flex-none"></div>
        <!-- First Section -->
        <section class="cover container mx-auto py-6 w-5/6 flex flex-col">
            <header class="flex items-center">
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
            <div class="intro">
                <div class="text">
                    <h1 class="text-lg">Hi, I'm Caitlin.</h1>
                    <h2 class="text-2xl">
                        Frontend Web Developer with a passion for design.
                    </h2>
                </div>
            </div>
        </section>
        <section class="about">
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">About me</h4>
                <h3 class="text-lg">Who is Caitlin?</h3>
                <!-- <h3>Who is Caitlin?</h3>
                <h2>About me</h2> -->
                <p>
                    I have 10+ years of developer experience. I strive to have
                    clean & reusable code while following best practices.
                </p>
                <p>
                    I really appreciate a good design that will leave the user
                    with a great experience. I care a lot about the user's
                    experience - there is nothing more frustrating than an
                    application or website that is confusing.
                </p>
                <p>
                    I have my BFA in Interactive Media & Web Design from The Art
                    Institute of Tennessee &mdash; Nashville. I am currrently
                    employed at Quore in Franklin, TN.
                </p>
                <Button>
                    Resume
                    <Icon icon="pdf" class="pl-1" />
                </Button>
                <!-- <Button
                    type="link"
                    location="/caitlin-hawley-resume.pdf"
                    target="_blank"
                >
                    Resume
                    <Icon icon="pdf" class="pl-1" color="white" />
                </Button> -->
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./ts/prototype.ts"></script>
<style lang="scss" src="./scss/prototype.scss" scoped></style>
