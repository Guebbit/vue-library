import { defineComponent } from 'vue'
import { AspectRatio, Media } from '../../../../';

export default defineComponent({
    name: 'SimpleCardMedia',
    extends: Media,

    props: {
        /**
         * Wanted ratio
         */
        ratio: {
            type: [Number, String],
            required: false
        },

        /**
         * If it's a background
         */
        background: {
            type: Boolean,
            default: () => false
        },
    },

    setup(props, { attrs }) {
        if(!props.ratio)
            return () =>
                <Media
                    {...props}
                    {...attrs}
                    class={attrs.class ? attrs.class : (props.background ? 'card-background' : 'card-media')}
                />
        return () =>
            <AspectRatio
                {...attrs}
                ratio={props.ratio}
                style={{
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "--image-aspect-ratio": "var(--aspect-ratio)",
                }}
                class={attrs.class ? attrs.class : (props.background ? 'card-background' : 'card-media')}
            >
                <Media {...props} />
            </AspectRatio>
    },
})
