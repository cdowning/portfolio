import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'Index',
    data() {
        return {
            items: [
                {
                    source: 'Unsplash',
                    link: {
                        url: 'caitlinhawley.com',
                        name: 'Caitlin Hawley',
                    },
                    content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                    header: 'This is a header',
                    image: 'https://images.unsplash.com/photo-1650991768876-2a9a554f268c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
                    source: 'Unsplash',
                    link: {
                        url: 'caitlinhawley.com',
                        name: 'Caitlin Hawley',
                    }, // isActionable
                    content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    likes: 120,
                },
                {
                    header: 'Another header 3',
                    tag: 'web development',
                    image: 'https://images.unsplash.com/photo-1651024954841-dbd597a403bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
                    source: 'iStock',
                    content:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    likes: 20,
                },
                {
                    header: 'Another header 4',
                    tag: 'web development',
                    content:
                        'Chupa chups cotton candy sweet danish sesame snaps sweet roll caramels donut danish. Chocolate bar carrot cake liquorice gummies gummi bears gummies shortbread tiramisu cotton candy.',
                    link: {
                        url: 'google.com',
                        name: 'Google',
                    },
                    likes: 3000,
                },
            ],
            mobileMenu: false,
            icon: 'menu',
            switchColorTheme:
                this.$colorMode.value === 'dark' ? 'light' : 'dark',
        };
    },
    computed: {
        colorIcon() {
            // If no theme is set in settings, defaults to 'light'
            const icon = this.$colorMode.value === 'dark' ? 'sun' : 'moon';
            return icon;
        },
        logoSrc() {
            return `caitlin-hawley-${this.$colorMode.value}.svg`;
        },
        mobileIcon() {
            return this.icon === 'menu' ? 'menu' : 'close';
        },
    },
    mounted() {
        console.log(this.$colorMode.value);
    },
    methods: {
        onUpdateTheme() {
            const color = this.$colorMode.value === 'dark' ? 'light' : 'dark';
            this.$colorMode.value = color;
        },
        onMobileMenu() {
            this.mobileMenu = !this.mobileMenu;
            this.icon = this.icon === 'menu' ? 'close' : 'menu';
        },
    },
});
