import "./SimpleButton.scss";
import { defineComponent, computed } from 'vue';

import useComponentSizes from '../../../../composables/componentSizes.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'

/**
 * Types
 */
export { EComponentSizes } from '../../../../composables/componentSizes.ts'

export enum ESimpleButtonVariants {
    ROUNDED = 'rounded',
    CIRCULAR = 'circular',
    PILL = 'pill',
    OUTLINED = 'outlined',
    PLAIN = 'plain',
    FLAT = 'flat',
    ICON = 'icon-only'
}

/**
 * Outside setup only composable
 */
const {
    prop: sizeProps
} = useComponentSizes("button-");

const {
    prop: variantProps
} = useComponentVariants<ESimpleButtonVariants>("button-");

// eslint-disable-next-line @typescript-eslint/naming-convention
export default defineComponent({
    name: 'SimpleButton',

    props: {
        ...sizeProps,
        ...variantProps,

        /**
         * Display only the icon without text
         * (equivalent of icon-only variant)
         */
        icon: {
            type: Boolean,
            default: () => false,
        },

        /**
         * Image src (if not slot)
         */
        image: {
            type: String,
            default: () => '',
        },

        /**
         * Image alt (if not slot)
         */
        imageAlt: {
            type: String,
            default: () => '',
        },

        /**
         * Button text (if not slot)
         */
        text: {
            type: String,
            default: () => '',
        },

        /**
         * animate on hover and on active
         */
        animated: {
            type: Boolean,
            default: () => true,
        },

        /**
         * Animate on hover only
         */
        animatedHover: {
            type: Boolean,
            default: () => false,
        },

        /**
         * Animate on active only
         */
        animatedActive: {
            type: Boolean,
            default: () => false,
        },

        /**
         * Button is active
         */
        active: {
            type: Boolean,
            default: () => false,
        },

        /**
         * Button is disabled
         */
        disabled: {
            type: Boolean,
            default: () => false,
        },
    },

    setup(props, { attrs, slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: sizeClass
        } = useComponentSizes("button-", props);
        const {
            classes: variantClasses,
        } = useComponentVariants<ESimpleButtonVariants>("button-", props);

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            'simple-button',
            'animate-on-hover',
            sizeClass.value,
            variantClasses.value,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'button-icon-only': props.icon,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-on-hover': props.animated || props.animatedHover,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-on-active': props.animated || props.animatedActive,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-active': props.active,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'button-disabled': props.disabled,
            },
        ]);

        /**
         * Template
         */
        return () => (
          <button class={classes.value} {...attrs}>
              {slots.icon
                ? slots.icon()
                : props.image && (
                <img
                  src={props.image}
                  alt={props.imageAlt}
                  class="button-image"
                />
              )}
              {slots.default ? slots.default() : (
                !props.icon ? props.text : ''
              )}
          </button>
        );
    },
});