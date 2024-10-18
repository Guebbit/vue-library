import { defineComponent } from 'vue'
import Media from '../../../abstracts/Media/Media.tsx'

export default defineComponent({
    name: 'SimpleCardMedia',
    extends: Media,

    props: {
        /**
         * If it's a background
         */
        background: {
            type: Boolean,
            default: () => false
        },
    },

    setup(props, { attrs }) {
        return () =>
            <Media
                {...props}
                {...attrs}
                class={attrs.class ? attrs.class : (props.background ? 'card-background' : 'card-media')}
            />
    },
})
