import './SimpleCard.scss'
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import useComponentGenerics from '../../../../composables/componentGenerics.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'
import CardHeader from './SimpleCardHeader.tsx';
import CardFooter from './SimpleCardFooter.tsx';
import CardMedia from './SimpleCardMedia.tsx';
import CardActions from './SimpleCardActions.tsx';

export enum ESimpleCardVariants {
    ROUNDED = 'rounded',
    CIRCULAR = 'circular',
    OUTLINED = 'outlined',
    FLAT = 'flat',
    OVERLAY = 'overlay',
}

export enum ESimpleCardMediaAlignment {
    LEFT = 'left',
    RIGHT = 'right'
}

/**
 * Outside setup only composable
 */
const {
    animationProps,
    themeProps
} = useComponentGenerics();
const {
    prop: variantProps
} = useComponentVariants<ESimpleCardVariants>({});

/**
 * Component
 */
export default defineComponent({
    name: 'SimpleCard',

    props: {
        ...animationProps,
        ...variantProps,
        ...themeProps,

        /**
         * Card background (if not slot)
         */
        background: {
            type: String,
            required: false
        },

        /**
         * Background ratio
         */
        backgroundRatio: {
            type: [Number, String],
            required: false
        },

        /**
         * Card image (if not slot)
         */
        image: {
            type: String,
            required: false
        },

        /**
         * Card ALT image (if not slot)
         */
        imageAlt: {
            type: String,
            required: false
        },

        /**
         * Image ratio
         */
        imageRatio: {
            type: [Number, String],
            required: false
        },

        /**
         * Card ALT image (if not slot)
         */
        imageAlignment: {
            type: String as PropType<ESimpleCardMediaAlignment | undefined>,
            required: false,
            validator: (value?: string) => {
                if(!value)
                    return true;
                return Object.values(ESimpleCardMediaAlignment).includes(value as ESimpleCardMediaAlignment);
            }
        },

        /**
         * Content title (if not slot)
         */
        title: {
            type: String,
            required: false
        },

        /**
         * Tag of title (if not slot)
         */
        titleTag: {
            type: String,
            default: () => "h3"
        },

        /**
         * Content subtitle (if not slot)
         */
        subtitle: {
            type: String,
            required: false
        },

        /**
         * Tag of subtitle (if not slot)
         */
        subtitleTag: {
            type: String,
            default: () => "span"
        },

        /**
         * Content text (if not slot)
         */
        text: {
            type: String,
            default: () => ''
        },

        /**
         * Tag of text (if not slot)
         */
        textTag: {
            type: String,
            default: () => 'p'
        },

        /**
         * A card cannot be "disabled" in a way a button is.
         * But a "disabled" design can be useful
         */
        disabled: {
            type: Boolean,
            default: () => false
        },
    },

    setup(props, { slots, attrs, emit }) {
        /**
         * Setup only composable
         */
        const {
            classes: variantClasses
        } = useComponentVariants<ESimpleCardVariants>({ props }, "card-");
        const {
            themeVars
        } = useComponentGenerics();

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            'simple-card',
            variantClasses.value,
            props.imageAlignment ? `card-media-${props.imageAlignment}` : '',
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-on-hover': props.animated || props.animatedHover,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-on-active': props.animated || props.animatedActive,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-active': props.active,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'button-disabled': props.disabled
            }
        ]);

        const cardImage =
            props.image ?
                <CardMedia
                    class="card-media"
                    media={props.image}
                    ratio={props.imageRatio}
                    alt={props.imageAlt}
                />
                : null

        const cardBackground =
            props.background ?
                <CardMedia
                    class="card-background"
                    media={props.background}
                    ratio={props.backgroundRatio}
                />
                : null

        /**
         *
         */
        const cardContent =
            slots.content || props.text ?
                <div class="card-content">
                    {slots.content ? slots.content() : (
                        <component is={props.textTag}>{props.text}</component>
                    )}
                </div> : null

        /**
         *
         */
        const slotImage =
            slots.image
            && (() => {
                // if icon slot was used, add the button-icon class to the node inserted by the user (if present)
                const iconVNode = slots.image?.()[0]
                if (iconVNode) {
                    iconVNode.props = {
                        ...iconVNode.props,
                        class: `${iconVNode.props?.class || ''} card-media` // Append your class here
                    }
                    return iconVNode
                }
                return slots.image()
            })();

        /**
         *
         */
        const slotBackground =
            slots.background
            && (() => {
                // if icon slot was used, add the button-icon class to the node inserted by the user (if present)
                const iconVNode = slots.background?.()[0]
                if (iconVNode) {
                    iconVNode.props = {
                        ...iconVNode.props,
                        class: `${iconVNode.props?.class || ''} card-background` // Append your class here
                    }
                    return iconVNode
                }
                return slots.background()
            })();

        /**
         *
         */
        return () => (
            <div
                class={classes.value}
                style={{ ...attrs.style || {}, ...themeVars.value }}
                {...attrs}
            >
                {slotBackground ? slotBackground : cardBackground}
                {slotImage ? slotImage : cardImage}
                <CardHeader
                    title={props.title}
                    titleTag={props.titleTag}
                    sub={props.subtitle}
                    subTag={props.subtitleTag}
                    v-slots={{
                        actions: slots.headerActions,
                        default: slots.header,
                        sub: slots.subtitle,
                        title: slots.title,
                    }}
                />
                {slots.default ? slots.default() : null}
                {cardContent}
                {slots.actions ?
                    <CardActions
                        variant="absolute"
                        v-slots={{
                            default: slots.actions,
                        }}
                    /> : null}
                <CardFooter
                    v-slots={{
                        default: slots.footer,
                        actions: slots.footerActions,
                    }}
                />
            </div>
        )
    }
})