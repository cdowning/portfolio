import {
    defineComponent,
    computed,
    toRefs,
    ref,
    onMounted,
} from '@nuxtjs/composition-api';

export const DIALOG_CLASS_PREFIX = 'dialog-';

export default defineComponent({
    name: 'Dialog',
    props: {
        size: {
            type: String,
            default: 'md',
        },
        content: {
            type: Object,
            default: () => {},
        },
    },
    emits: ['close'],
    setup(props, context) {
        const content = toRefs(props.content);
        console.log(content);

        function onCloseDialog() {
            context.emit('close');
        }

        onMounted(() => {
            const test = content.header || null;
            console.log(!!test);
        });

        return {
            onCloseDialog,
            // slot content

            header: content.header || '',
            details: content.details || '',
        };
    },
});
