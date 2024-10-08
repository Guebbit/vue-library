import './SimpleCard.scss'
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import useComponentGenerics from '../../../../composables/componentGenerics.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'

export enum ESimpleCardVariants {
    ROUNDED = 'rounded',
    CIRCULAR = 'circular',
    OUTLINED = 'outlined',
    FLAT = 'flat',
}

export enum ESimpleCardImageAlignment {
    LEFT = 'left',
    RIGHT = 'right'
}

/**
 * Outside setup only composable
 */
const {
    animationProps
} = useComponentGenerics()
const {
    prop: variantProps
} = useComponentVariants<ESimpleCardVariants>('card-')

/**
 * Component
 */
export default defineComponent({
    name: 'SimplePanel',

    props: {
        ...animationProps,
        ...variantProps,

        /**
         * Card background (if not slot)
         */
        background: {
            type: String,
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
         * Card ALT image (if not slot)
         */
        imageAlignment: {
            type: String as PropType<ESimpleCardImageAlignment | undefined>,
            required: false,
            validator: (value?: string) => {
                if(!value)
                    return true;
                return Object.values(ESimpleCardImageAlignment).includes(value as ESimpleCardImageAlignment);
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
        } = useComponentVariants<ESimpleCardVariants>('card-', props);

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            'simple-card',
            variantClasses.value,
            props.imageAlignment ? `card-image-${props.imageAlignment}` : '',
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

        /**
         *
         */
        const cardSubtitle = (
            slots.subtitle || props.subtitle ?
                <component
                    is={props.subtitleTag}
                    class="card-subtitle"
                >
                    {slots.subtitle ? slots.subtitle() : props.subtitle}
                </component>
                : null
        );

        /**
         * WARNING: If there is no title, there is no subtitle
         */
        const cardTitle =
            slots.title || props.title ?
                <component
                    is={props.titleTag}
                    class="card-title"
                >
                    {slots.title ? slots.title() : props.title}
                    {cardSubtitle}
                </component>
                : null

        /**
         *
         */
        const cardHeader =
            slots.header || slots.headerActions || cardTitle ?
                <div class="card-header">
                    {slots.headerActions ? <div class="card-actions">{slots.headerActions()}</div> : null}
                    {slots.header ? slots.header() : cardTitle}
                </div>
                : null

        /**
         *
         */
        const cardImage =
            props.image ?
                <img
                    class="card-image"
                    alt={props.imageAlt}
                    src={props.image}
                />
                : null;

        /**
         *
         */
        const cardBackground =
            props.background ?
                <img class="card-background" src={props.background} />
                : null

        /**
         *
         */
        const cardContent =
            <div class="card-content">
                {slots.content ? slots.content() : (
                    <component is={props.textTag}>{props.text}</component>
                )}
            </div>

        /**
         * card-actions-center
         * card-actions-end
         * card-actions-vertical
         */
        const cardFooter =
            slots.footer || slots.footerActions ?
                <div class="card-footer">
                    {slots.footer ? slots.footer() : null}
                    {slots.footerActions ? <div class="card-actions">{slots.footerActions()}</div> : null }
                </div>
                : null

        return () => (
            <div
                class={classes.value}
                {...attrs}
            >
                {cardHeader}
                {slots.background ? slots.background() : cardBackground}
                {slots.image ? slots.image() : cardImage}
                {slots.default ? slots.default() : (
                    slots.content ? <div class="card-content">{slots.content()}</div> : cardContent
                )}
                {slots.actions ? <div class="card-actions card-actions-absolute">{slots.actions()}</div> : null}
                {cardFooter}
            </div>
        )
    }
})