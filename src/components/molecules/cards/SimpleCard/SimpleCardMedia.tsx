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
    },

    setup(props, { attrs }) {
        if(!props.ratio)
            return () =>
                <Media
                    {...props}
                    {...attrs}
                    // class={[
                    //     attrs.class,
                    //     'card-media'
                    // ]}
                />
        return () =>
            <AspectRatio
                {...attrs}
                ratio={props.ratio}
                style={{
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "--image-aspect-ratio": "var(--aspect-ratio)",
                }}
                // class={[
                //     attrs.class,
                //     'card-media'
                // ]}
            >
                <Media {...props} />
            </AspectRatio>
    },
})
