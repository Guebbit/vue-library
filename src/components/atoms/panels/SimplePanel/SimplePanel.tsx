import './SimplePanel.scss'
import { computed, defineComponent } from 'vue'

import { THEME_VAR_PREFIX, THEME_CLASS_PREFIX } from '../../../../_vars.ts'
import useComponentGenerics from '../../../../composables/componentGenerics.ts';
import useComponentVariants from '../../../../composables/componentVariants.ts';
import useComponentThemes from '../../../../composables/componentThemes.ts';
import editSlotItems from '../../../../utils/editSlotItems.ts'
import SimplePanelMedia from './SimplePanelMedia.tsx'

export enum ESimplePanelVariants {
    CONTENT_CENTERED = 'content-centered',
    CONTENT_BOTTOM = 'content-bottom',
    SIZE_AS_CONTENT = 'size-as-content',
}

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics();
const {
    props: themeProps
} = useComponentThemes();
const {
    props: variantsProps
} = useComponentVariants<ESimplePanelVariants>({
    enumItem: ESimplePanelVariants
});

/**
 * Component
 */
export default defineComponent({
    name: 'SimpleCard',

    props: {
        ...variantsProps,
        ...animationProps,
        ...themeProps,

        /**
         * Background (if not slot)
         */
        height: {
            type: String,
            default: () => "auto"
        },

        /**
         * Background (if not slot)
         */
        background: {
            type: String,
            required: false
        },

        /**
         * Background on hover (if not slot)
         */
        backgroundHover: {
            type: String,
            required: false
        },

        /**
         * Background ratio
         */
        ratio: {
            type: [Number, String],
            required: false
        },

        /**
         * Background ratio
         */
        hoverRatio: {
            type: [Number, String],
            required: false
        },

        /**
         * Declare that the background is a video
         * (more efficient to declare it instead of check on it)
         */
        backgroundVideo: {
            type: Boolean,
            default: () => false
        },

        /**
         * on props.video only, determine video type
         */
        backgroundType: {
            type: String,
            default: () => ''
        },

        /**
         *
         */
        overlay: {
            type: Boolean,
            default: () => false
        },

        /**
         *
         */
        overlayColor: {
            type: String,
            default: () => '#000'
        },

        /**
         * on props.video only, determine video type
         */
        overlayOpacity: {
            type: Number,
            default: () => 0.75
        },

        /**
         * Highlight text
         */
        highlight: {
            type: Boolean,
            default: () => false
        },
    },

    /**
     *
     * @param props
     * @param slots
     * @param attrs
     */
    setup(props, { slots, attrs }) {
        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props });
        const {
            styles: themeStyles
        } = useComponentThemes({ props }, THEME_VAR_PREFIX + "simple-panel-");
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimplePanelVariants>({
            props,
            enumItem: ESimplePanelVariants
        }, THEME_CLASS_PREFIX + "panel-");

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            ...new Set([
                THEME_CLASS_PREFIX + 'simple-panel',
                ...animationClasses.value,
                ...variantsClasses.value,
                props.highlight ? THEME_CLASS_PREFIX + 'panel-text-shadow' : undefined,
                props.ratio ? THEME_CLASS_PREFIX + 'panel-size-as-content' : undefined,
            ])
        ].filter(Boolean));

        /**
         *
         */
        const slotBackground = editSlotItems(slots.background, {
            classes: [THEME_CLASS_PREFIX + "panel-background"]
        });

        /**
         *
         */
        return () => (
            <div
                {...attrs}
                class={[attrs.class, classes.value]}
                style={{
                    ...attrs.style || {},
                    ...themeStyles.value || {},
                    height: props.height
                }}
            >
                {
                    props.overlay ?
                        <div
                            class={THEME_CLASS_PREFIX + 'panel-overlay'}
                            style={{
                                "background": props.overlayColor,
                                "opacity": props.overlayOpacity,
                            }}
                        />
                        : null
                }
                {
                    slotBackground && slotBackground.length > 0 ?
                        slotBackground : (
                            props.background ?
                                <SimplePanelMedia
                                    media={props.background}
                                    ratio={props.ratio}
                                    type={
                                        props.backgroundVideo ?
                                            (props.backgroundType ?
                                                    props.backgroundType :
                                                    props.background.split('.').pop()
                                            ) : undefined
                                    }
                                />
                                : null
                        )
                }
                <div class={THEME_CLASS_PREFIX + 'panel-content'}>
                    {slots.default ? slots.default() : null}
                </div>
            </div>
        )
    }
})