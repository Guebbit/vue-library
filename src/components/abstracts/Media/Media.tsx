import { defineComponent } from 'vue'
import { AspectRatio, Media } from '../../../index.ts';

export default defineComponent({
    name: 'AbstractMedia',
    extends: Media,

    props: {
        /**
         * Wanted ratio
         */
        ratio: {
            type: [Number, String],
            required: false
        },
    },

    setup(props, { attrs }) {
        if(!props.ratio)
            return () =>
                <Media
                    {...props}
                    {...attrs}
                />
        return () =>
            <AspectRatio
                {...attrs}
                ratio={props.ratio}
                style={{
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "--image-aspect-ratio": "var(--aspect-ratio)",
                }}
            >
                <Media {...props} />
            </AspectRatio>
    },
})
