<template>
    <div class="root">
        <section class="parallax-slide cover flex flex-col">
            <div class="background flex-none"></div>
            <!-- <img
                src="~assets/images/global/computer-bg-light.jpg"
                class="background"
            /> -->
            <header class="flex items-center container mx-auto py-6 w-5/6">
                <Logo />
                <nav
                    class="flex-grow w-full pr-3 flex justify-center items-center"
                >
                    <a class="flex items-center mx-4">
                        <Icon
                            class="cursor-pointer mr-2"
                            color="gray-30"
                            icon="female"
                        />
                        About
                    </a>
                    <a class="flex items-center mx-4">
                        <Icon
                            class="cursor-pointer mr-2"
                            color="gray-30"
                            icon="briefcase"
                        />
                        Experience
                    </a>
                    <a class="flex items-center mx-4">
                        <Icon
                            class="cursor-pointer mr-2"
                            color="gray-30"
                            icon="envelope"
                        />
                        Contact
                    </a>
                </nav>
                <div class="color-mode hidden md:block">
                    <svg-icon
                        :class="['theme-icon', 'cursor-pointer']"
                        name="moon"
                        width="24"
                        height="24"
                    />
                </div>
            </header>
            <div class="intro grow container mx-auto py-6 w-5/6">
                <div class="text">
                    <h1 class="text-lg">Hi, I'm Caitlin.</h1>
                    <h2 class="text-2xl font-normal">
                        Frontend Web Developer with a passion for design.
                    </h2>
                </div>
            </div>
        </section>
        <!-- <div id="title" class="parallax-slide header">
            <h1>Pure CSS Parallax</h1>
        </div> -->
        <section class="parallax-slide about">
            <div class="content container mx-auto py-6 w-5/6">
                <h4 class="text-base">About me</h4>
                <h3 class="text-lg">Who is Caitlin?</h3>
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
        </section>
        <section class="parallax-slide experience">
            <div class="content container mx-auto py-6 w-5/6">
                <h3 class="text-lg">Who is Caitlin?</h3>
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

        <!-- <div id="slide1" class="parallax-slide about">
            <div class="title">
                <h1>Slide 1</h1>
                <p>
                    Lorem ipsum dolor sit amet, in velit iudico mandamus sit,
                    persius dolorum in per, postulant mnesarchum cu nam. Malis
                    movet ornatus id vim, feugait detracto est ea, eam eruditi
                    conceptam in. Ne sit explicari interesset. Labores perpetua
                    cum at. Id viris docendi denique vim.
                </p>
            </div>
        </div>

        <div id="slide2" class="slide">
            <div class="title">
                <h1>Slide 2</h1>
                <p>
                    Lorem ipsum dolor sit amet, in velit iudico mandamus sit,
                    persius dolorum in per, postulant mnesarchum cu nam. Malis
                    movet ornatus id vim, feugait detracto est ea, eam eruditi
                    conceptam in. Ne sit explicari interesset. Labores perpetua
                    cum at. Id viris docendi denique vim.
                </p>
            </div>
            <img
                src="https://images.unsplash.com/photo-1649083048269-8bfb755e7b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            />
            <img
                src="https://images.unsplash.com/photo-1649179811806-2f7eefb9a4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
        </div>

        <div id="slide3" class="slide">
            <div class="title">
                <h1>Slide 3</h1>
                <p>
                    Lorem ipsum dolor sit amet, in velit iudico mandamus sit,
                    persius dolorum in per, postulant mnesarchum cu nam. Malis
                    movet ornatus id vim, feugait detracto est ea, eam eruditi
                    conceptam in. Ne sit explicari interesset. Labores perpetua
                    cum at. Id viris docendi denique vim.
                </p>
            </div>
        </div>

        <div id="slide4" class="slide header">
            <h1>The End</h1>
        </div> -->
    </div>
</template>

<script lang="ts" src="./ts/parallax.ts"></script>
