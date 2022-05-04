import {
    defineComponent,
    computed,
    ref,
    useContext,
} from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'Index',
    setup() {
        const {
            $colorMode,
            // $colorMode: { value },
        } = useContext();

        const mobileMenu = ref<boolean>(false);
        const icon = ref<string>('menu');
        const switchColorTheme = $colorMode.value === 'dark' ? 'light' : 'dark';

        const cards = [
            {
                isImageExternal: false,
                image: 'images/codepen/highlighter.png',
                header: 'Highlighter Effect',
                description: 'Highlighter effect with pure CSS',
                link: {
                    url: 'https://codepen.io/cdowning/pen/vYprdXz',
                    name: 'View pen',
                },
            },
            {
                isImageExternal: false,
                image: 'images/codepen/skeleton-loading.png',
                header: 'Skeleton Loading',
                description:
                    'Skeleton loading is a popular content loading feature. This skeleton loading utilizes CSS keyframes.',
                link: {
                    url: 'https://codepen.io/cdowning/pen/dEVWKb',
                    name: 'View Pen',
                },
            },
            {
                image: 'images/codepen/loading-spinner.png',
                header: 'Loading Spinner',
                description: 'Loading spinner using CSS',
                link: {
                    url: 'https://codepen.io/cdowning/pen/oNpyqGK',
                    name: 'View pen',
                },
            },
            // {
            //     isImageExternal: true,
            //     header: 'This is a very long card header',
            //     image: 'https://images.unsplash.com/photo-1650991768876-2a9a554f268c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
            //     source: 'Unsplash',
            //     link: {
            //         url: 'caitlinhawley.com',
            //         name: 'Caitlin Hawley',
            //     },
            //     description:
            //         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            // },
            // {
            //     header: 'This is a header',
            //     source: 'Unsplash',
            //     link: {
            //         url: 'caitlinhawley.com',
            //         name: 'Caitlin Hawley',
            //     }, // isActionable
            //     description:
            //         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            // },
        ];

        // Computed
        const colorIcon = computed<string>(() => {
            // If no theme is set in settings, defaults to 'light'
            const icon = $colorMode.value === 'dark' ? 'sun' : 'moon';
            return icon;
        });
        const logoSrc = computed<string>(() => {
            return `caitlin-hawley-${$colorMode.value}.svg`;
        });
        const mobileIcon = computed<string>(() => {
            return icon.value === 'menu' ? 'menu' : 'close';
        });

        // Methods
        const onUpdateTheme = () => {
            const color = $colorMode.value === 'dark' ? 'light' : 'dark';
            $colorMode.value = color;
        };
        // Opens the mobile menu
        const onMobileMenu = () => {
            mobileMenu.value = !mobileMenu.value;
            icon.value = icon.value === 'menu' ? 'close' : 'menu';
        };

        return {
            // Data variables
            mobileMenu,
            icon,
            switchColorTheme,
            cards,

            // Computed
            colorIcon,
            logoSrc,
            mobileIcon,

            // Methods
            onUpdateTheme,
            onMobileMenu,
        };
    },
});
