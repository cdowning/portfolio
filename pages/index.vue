<template>
    <!-- root element -->
    <div class="w-full flex flex-col">
        <!-- Created a background element for blur and potential parallax -->
        <div class="background flex-none"></div>
        <!-- First Section -->
        <section class="cover flex flex-col">
            <header class="flex items-center container mx-auto py-6 w-5/6">
                <Logo class="grow" />
                <!-- Mobile menu icon -->
                <Icon
                    :icon="icon"
                    color="white"
                    class="menu-icon cursor-pointer z-10 md:hidden"
                    @click.native="onMobileMenu"
                />
                <!-- Desktop/tablet nav -->
                <nav
                    class="flex-grow w-full pr-3 md:flex justify-center items-center hidden"
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

                <!-- Mobile menu -->
                <!-- TODO: Use <menu> instead of ul - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu -->
                <ul
                    v-if="mobileMenu"
                    class="menu mobile-menu flex flex-col items-center px-3 py-24 bg-primary"
                >
                    <li class="py-3">About</li>
                    <li class="py-3">Experience</li>
                    <li class="py-3">Contact</li>
                    <div
                        class="color-mode flex cursor-pointer py-3"
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
            </header>
            <div class="intro container mx-auto py-6 w-5/6">
                <div class="text">
                    <h1 class="text-lg">Hi, I'm Caitlin.</h1>
                    <h2 class="text-2xl">
                        Frontend Web Developer with a
                        <span class="highlight">passion</span> for design.
                    </h2>
                </div>
            </div>
        </section>
        <!-- <div class="angle angle-v-down-transparent"></div> -->
        <section class="about bg-primary">
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">About me</h4>
                <h3 class="text-lg">Who am I?</h3>
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
            <div id="skills" class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">Skills</h4>
                <h3 class="text-lg">What can I do?</h3>
                <p>
                    My expertise is using Nuxt.js, Typescript & Sass. When
                    building out components, I will utilize
                    <span class="highlight">Storybook</span> to build out my
                    component library. I have worked with many CSS Frameworks,
                    but <span class="highlight tailwind">Tailwind</span> is the
                    one I love the most.
                </p>

                <h3 class="text-lg">Skill Roadmap</h3>
                <p>
                    I have worked with
                    <span class="highlight vue">Vue.js</span> for so long, I
                    would love to dabble in React.
                </p>
                <div class="flex flex-wrap justify-center gap-y-4 gap-x-6">
                    <Icon icon="sass" size="xl" class="sass" />
                    <Icon icon="storybook" size="xl" class="storybook" />
                    <Icon icon="html5" size="xl" class="html" />
                    <Icon icon="css3" size="xl" class="css" />
                    <Icon icon="tailwind" size="xl" class="tailwind" />
                    <Icon icon="nuxt" size="xl" class="nuxt" />
                    <Icon icon="jquery" size="xl" class="jquery" />
                    <Icon icon="jira" size="xl" class="jira" />
                    <Icon icon="javascript" size="xl" class="javascript" />
                    <Icon icon="jest" size="xl" class="jest" />
                    <Icon icon="git" size="xl" class="git" />
                    <Icon icon="bootstrap" size="xl" class="bootstrap" />
                    <Icon icon="figma" size="xl" class="figma" />
                    <Icon icon="typescript" size="xl" class="typescript" />
                    <Icon icon="vscode" size="xl" class="vscode" />
                    <Icon icon="vuetify" size="xl" class="vuetify" />
                    <Icon icon="vue" size="xl" class="vue" />
                    <Icon icon="wordpress" size="xl" class="wordpress" />
                </div>
            </div>
        </section>
        <div class="angle angle-v-down"></div>
        <section id="about" class="about bg-secondary">
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">About me</h4>
                <h3 class="text-lg">Who am I?</h3>
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
            </div>
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">Skills</h4>
                <h3 class="text-lg">What can I do?</h3>
                <p>
                    My expertise is using Nuxt.js, Typescript & Sass. When
                    building out components, I will utilize
                    <span class="highlight">Storybook</span> to build out my
                    component library. I have worked with many CSS Frameworks,
                    but <span class="highlight tailwind">Tailwind</span> is the
                    one I love the most.
                </p>

                <h3 class="text-lg">Skill Roadmap</h3>
                <p>
                    I have worked with
                    <span class="highlight vue">Vue.js</span> for so long, I
                    would love to dabble in React.
                </p>
            </div>
        </section>
        <div class="angle angle-slant-down"></div>
        <section id="experience" class="about bg-primary">
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">About me</h4>
                <h3 class="text-lg">Who am I?</h3>
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
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">Skills</h4>
                <h3 class="text-lg">What can I do?</h3>
                <p>
                    My expertise is using Nuxt.js, Typescript & Sass. When
                    building out components, I will utilize
                    <span class="highlight">Storybook</span> to build out my
                    component library. I have worked with many CSS Frameworks,
                    but <span class="highlight tailwind">Tailwind</span> is the
                    one I love the most.
                </p>

                <h3 class="text-lg">Skill Roadmap</h3>
                <p>
                    I have worked with
                    <span class="highlight vue">Vue.js</span> for so long, I
                    would love to dabble in React.
                </p>
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./ts/prototype.ts"></script>
<style lang="scss" src="./scss/prototype.scss" scoped></style>
