import "./SimpleButton.scss"

import { defineComponent, computed, type PropType } from 'vue';

type ISimpleButtonVariants =
  | ''
  | 'rounded'
  | 'circular'
  | 'pill'
  | 'outlined'
  | 'plain'
  | 'flat';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SimpleButton = defineComponent({
    name: 'SimpleButton',

    props: {
        /**
         * Button size
         */
        size: {
            type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
            default: () => 'md',
        },

        /**
         * Button variant
         */
        variants: {
            type: Array as PropType<ISimpleButtonVariants[]>,
            default: () => [],
        },

        /**
         * Display only the icon without text
         */
        icon: {
            type: Boolean,
            default: () => false,
        },

        /**
         * Image (if not slot)
         */
        image: {
            type: String,
            default: () => '',
        },

        /**
         * Image (if not slot)
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
         * TODO separare hover e active?
         */
        animated: {
            type: Boolean,
            default: () => true,
        },

        /**
         *
         */
        active: {
            type: Boolean,
            default: () => false,
        },

        /**
         *
         */
        disabled: {
            type: Boolean,
            default: () => false,
        },
    },

    setup(props, { attrs, slots }) {
        /**
         * If a size was set, the logic lies in the css class
         */
        const sizeClass = computed(() =>
          props.size ? `button-${props.size}` : ''
        );

        /**
         * Aggregator of all the classes of component
         */
        const classes = [
            'simple-button',
            'animate-on-hover',
            sizeClass.value,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'button-icon-only': props.icon,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'button-disabled': props.disabled,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-on-active animate-on-hover': props.animated,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'animate-active': props.active,
            },
        ];

        /**
         * Template
         */
        return () => (
          <button class={classes}>
              {slots.icon
                ? slots.icon()
                : props.image && (
                <img
                  src={props.image}
                  alt={props.imageAlt}
                  class="button-image"
                />
              )}
              {slots.default ? slots.default() : !props.icon ? props.text : ''}
          </button>
        );
    },
});
