import "./SimpleButton.scss";
import { defineComponent, computed } from 'vue';

import useComponentGenerics from '../../../../composables/componentGenerics.ts'
import useComponentSizes from '../../../../composables/componentSizes.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'

export type { EComponentSizes } from '../../../../composables/componentSizes.ts'

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
    animationProps
} = useComponentGenerics();
const {
    prop: sizeProps
} = useComponentSizes("button-");
const {
    prop: variantProps
} = useComponentVariants<ESimpleButtonVariants>("button-");

/**
 * Component
 */
export default defineComponent({
    name: 'SimpleButton',

    props: {
        ...animationProps,
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
          <button
            class={classes.value}
            {...attrs}
            disabled={props.disabled || props.variant?.includes("disabled")}
          >
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