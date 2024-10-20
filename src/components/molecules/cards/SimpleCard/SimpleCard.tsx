import './SimpleCard.scss'
import { computed, defineComponent } from 'vue'
import type { VNode, PropType } from 'vue'

import { THEME_VAR_PREFIX, THEME_CLASS_PREFIX } from '../../../../_vars.ts'
import useComponentGenerics from '../../../../composables/componentGenerics.ts';
import useComponentVariants from '../../../../composables/componentVariants.ts';
import useComponentThemes from '../../../../composables/componentThemes.ts';
import editSlotItems from '../../../../utils/editSlotItems.ts'
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
    TRANSPARENT = 'transparent',
}

export enum ESimpleCardMediaAlignment {
    LEFT = 'left',
    RIGHT = 'right'
}

export enum ESimpleCardBorders {
    TOP = 'top',
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right',
    FULL = 'full'
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
} = useComponentVariants<ESimpleCardVariants>({
    enumItem: ESimpleCardVariants
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
                    return false;
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
         * Card border position
         */
        borderPosition: {
            type: Array as PropType<ESimpleCardBorders[]>,
            default: () => [],
            validator: (values?: string[]) => {
                if(!values || values.length === 0)
                    return false;
                return values.every(val => Object.values(ESimpleCardBorders).includes(val as ESimpleCardBorders));
            }
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

    setup(props, { slots, attrs }) {
        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props });
        const {
            styles: themeStyles
        } = useComponentThemes({ props }, THEME_VAR_PREFIX + "simple-card-");
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleCardVariants>({
            props,
            enumItem: ESimpleCardVariants
        }, THEME_CLASS_PREFIX + "card-");

        console.log("AYOOO", {...props}, [...variantsClasses.value])

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            ...new Set([
                THEME_CLASS_PREFIX + 'simple-card',
                ...animationClasses.value,
                ...variantsClasses.value,
                props.mediaAlignment ? `${THEME_CLASS_PREFIX}card-media-${props.mediaAlignment}` : undefined,
                props.mediaLeft ? THEME_CLASS_PREFIX + 'card-media-left' : undefined,
                props.mediaRight ? THEME_CLASS_PREFIX + 'card-media-right' : undefined,
                props.borderTop || props.borderPosition.includes(ESimpleCardBorders.TOP) ? THEME_CLASS_PREFIX + 'card-border-top-active' : undefined,
                props.borderBottom || props.borderPosition.includes(ESimpleCardBorders.BOTTOM) ? THEME_CLASS_PREFIX + 'card-border-bottom-active' : undefined,
                props.borderRight || props.borderPosition.includes(ESimpleCardBorders.RIGHT) ? THEME_CLASS_PREFIX + 'card-border-right-active' : undefined,
                props.borderLeft || props.borderPosition.includes(ESimpleCardBorders.LEFT) ? THEME_CLASS_PREFIX + 'card-border-left-active' : undefined,
                props.borderFull || props.borderPosition.includes(ESimpleCardBorders.FULL) ? THEME_CLASS_PREFIX + 'card-border-active' : undefined,
                props.disabled ? THEME_CLASS_PREFIX + 'card-disabled' : undefined,
            ])
        ].filter(Boolean));

        const cardMediaArray: VNode[] = [];

        if(props.media && props.mediaHover)
            cardMediaArray.push(
                <div class={THEME_CLASS_PREFIX + 'card-media'}>
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
                        class={THEME_CLASS_PREFIX + 'show-on-active'}
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
                    class={`${THEME_CLASS_PREFIX}card-background ${THEME_CLASS_PREFIX}show-on-active`}
                    media={props.backgroundHover}
                    ratio={props.backgroundHoverRatio}
                    background
                />
            )

        /**
         *
         */
        const slotMedia = editSlotItems(slots.media, {
            classes: [THEME_CLASS_PREFIX + "card-media"]
        });

        /**
         *
         */
        const slotBackground = editSlotItems(slots.background, {
            classes: [THEME_CLASS_PREFIX + "card-background"]
        });

        /**
         *
         */
        return () => (
            <div
                class={[attrs.class, classes.value]}
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