import './SimpleCard.scss'
import { computed, defineComponent } from 'vue'
import type { VNode, PropType } from 'vue'
import {
    composableComponentGenerics as useComponentGenerics,
    composableComponentVariants as useComponentVariants,
    // composableComponentThemes as useComponentThemes, // TODO what is the problem??
} from '../../../../index.ts'
import useComponentThemes from '../../../../composables/componentThemes.ts'

import CardHeader from './SimpleCardHeader.tsx';
import CardContent from './SimpleCardContent.tsx';
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

// TODO borders
// export enum ESimpleCardBorders {
//     TOP = 'top',
//     BOTTOM = 'bottom',
//     LEFT = 'left',
//     RIGHT = 'right',
// }

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics();
const {
    props: variantsProps
} = useComponentVariants<ESimpleCardVariants>();
const {
    props: themeProps
} = useComponentThemes();


/**
 * Component
 */
export default defineComponent({
    name: 'SimpleCard',

    props: {
        ...animationProps,
        ...variantsProps,
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
         * Card background (if not slot)
         */
        backgroundHover: {
            type: String,
            required: false
        },

        /**
         * Background ratio
         */
        backgroundHoverRatio: {
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
         * Card media (if not slot)
         */
        media: {
            type: String,
            required: false
        },

        /**
         * Card ALT media (if not slot)
         */
        mediaAlt: {
            type: String,
            required: false
        },

        /**
         * Media ratio
         */
        mediaRatio: {
            type: [Number, String],
            required: false
        },

        /**
         * Declare that the media is a video
         * (more efficient to declare it instead of check on it)
         */
        video: {
            type: Boolean,
            default: () => false
        },

        /**
         * on props.video only, determine video type
         */
        type: {
            type: String,
            default: () => ''
        },

        /**
         * Card media (if not slot)
         */
        mediaHover: {
            type: String,
            required: false
        },

        /**
         * Card ALT media (if not slot)
         */
        mediaHoverAlt: {
            type: String,
            required: false
        },

        /**
         * Media ratio
         */
        mediaHoverRatio: {
            type: [Number, String],
            required: false
        },

        /**
         * Card ALT media (if not slot)
         */
        mediaAlignment: {
            type: String as PropType<ESimpleCardMediaAlignment | undefined>,
            required: false,
            validator: (value?: string) => {
                if(!value)
                    return true;
                return Object.values(ESimpleCardMediaAlignment).includes(value as ESimpleCardMediaAlignment);
            }
        },

        /**
         * Shorthand of media-alignment = left
         */
        mediaLeft: {
            type: Boolean,
            default: () => false
        },

        /**
         * Shorthand of media-alignment = right
         */
        mediaRight: {
            type: Boolean,
            default: () => false
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

        /**
         *
         */
        borderTop: {
            type: Boolean,
            default: () => false
        },

        /**
         *
         */
        borderBottom: {
            type: Boolean,
            default: () => false
        },

        /**
         *
         */
        borderRight: {
            type: Boolean,
            default: () => false
        },

        /**
         *
         */
        borderLeft: {
            type: Boolean,
            default: () => false
        },

        /**
         *
         */
        borderFull: {
            type: Boolean,
            default: () => false
        }
    },

    setup(props, { slots, attrs, emit }) {
        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props })
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleCardVariants>({ props }, "card-");
        const {
            styles: themeStyles
        } = useComponentThemes({ props }, "simple-card-");

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            ...animationClasses.value,
            'simple-card',
            variantsClasses.value,
            props.mediaAlignment ? `card-media-${props.mediaAlignment}` : '',
            props.mediaLeft ? 'card-media-left' : '',
            props.mediaRight ? 'card-media-right' : '',
            props.borderTop ? 'card-border-top' : '',
            props.borderBottom ? 'card-border-bottom-active' : '',
            props.borderRight ? 'card-border-right-active' : '',
            props.borderLeft ? 'card-border-left-active' : '',
            props.borderFull ? 'card-border-active' : '',
            props.disabled ? 'card-disabled' : '',
        ]);

        const cardMediaArray: VNode[] = [];

        if(props.media && props.mediaHover)
            cardMediaArray.push(
                <div class="card-media">
                    <CardMedia
                        class=" "
                        media={props.media}
                        ratio={props.mediaRatio}
                        alt={props.mediaAlt}
                        type={
                            props.video ?
                                (props.type ?
                                        props.type :
                                        props.media.split('.').pop()
                                ) : undefined
                        }
                    />
                    <CardMedia
                        class="show-on-active"
                        media={props.mediaHover}
                        ratio={props.mediaHoverRatio}
                        alt={props.mediaHoverAlt}
                    />
                </div>
            )
        else if (props.media && !props.mediaHover)
            cardMediaArray.push(
                <CardMedia
                    media={props.media}
                    ratio={props.mediaRatio}
                    alt={props.mediaAlt}
                    type={
                        props.video ?
                            (props.type ?
                                    props.type :
                                    props.media.split('.').pop()
                            ) : undefined
                    }
                />
            )
        if(props.background)
            cardMediaArray.push(
                <CardMedia
                    media={props.background}
                    ratio={props.backgroundRatio}
                    background
                    type={
                        props.backgroundVideo ?
                            (props.backgroundType ?
                                    props.backgroundType :
                                    props.background.split('.').pop()
                            ) : undefined
                    }
                />
            )
        if(props.backgroundHover)
            cardMediaArray.push(
                <CardMedia
                    class="card-background show-on-active"
                    media={props.backgroundHover}
                    ratio={props.backgroundHoverRatio}
                    background
                />
            )

        /**
         * TODO function?
         */
        const slotMedia =
            slots.media
            && (() => {
                const iconVNode = slots.media?.()[0]
                if (iconVNode) {
                    iconVNode.props = {
                        ...iconVNode.props,
                        class: `${iconVNode.props?.class || ''} card-media`
                    }
                    return iconVNode
                }
                return slots.media()
            })();

        /**
         * TODO function?
         */
        const slotBackground =
            slots.background
            && (() => {
                const iconVNode = slots.background?.()[0]
                if (iconVNode) {
                    iconVNode.props = {
                        ...iconVNode.props,
                        class: `${iconVNode.props?.class || ''} card-background`
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
                style={{ ...attrs.style || {}, ...themeStyles.value || {} }}
                {...attrs}
            >
                {slotBackground}
                {slotMedia}
                {cardMediaArray}
                <div>
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
                    <CardContent
                        text={props.text}
                        tag={props.textTag}
                        v-slots={{
                            default: slots.content,
                            actions: slots.contentActions,
                        }}
                    />
                    <CardActions
                        variant="absolute"
                        v-slots={{
                            default: slots.actions,
                        }}
                    />
                    <CardFooter
                        v-slots={{
                            default: slots.footer,
                            actions: slots.footerActions,
                        }}
                    />
                </div>
            </div>
        )
    }
})