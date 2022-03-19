// Type/direction: Veritcal or horizontal
import { defineComponent } from '@nuxtjs/composition-api';

const Navigation = defineComponent({
    name: 'Navigation',
    props: {
        direction: {
            type: String,
            default: 'horizontal',
        },
    },
});

export default Navigation;
