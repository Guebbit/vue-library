import './SimplePanel.scss';
import { computed, defineComponent } from 'vue'
import type { PropType } from "vue";
import useComponentGenerics from '../../../../composables/componentGenerics.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'

export enum ESimpleCardVariants {
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
    prop: variantProps
} = useComponentVariants<ESimpleCardVariants>( {}, "card-");

export default defineComponent({
    name: "SimplePanel",

    props:{
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
         * Content title (if not slot)
         */
        title: {
            type: String,
            required: false
        },

        /**
         * Content subtitle (if not slot)
         */
        subtitle: {
            type: String,
            required: false
        },

        /**
         * Content text (if not slot)
         */
        text: {
            type: String,
            default: () => '',
        },

        /**
         * A card cannot be "disabled" in a way a button is.
         * But a "disabled" design can be useful
         */
        disabled: {
            type: Boolean,
            default: () => false,
        },
    },

    setup(props, { slots, attrs }) {
        /**
         * Setup only composable
         */
        const {
            classes: variantClasses,
        } = useComponentVariants<ESimpleCardVariants>({ props }, "card-");

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            'simple-card',
            variantClasses.value,
            {
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

        return () => (
          <div
            class={classes.value}
            {...attrs}
          >
              {slots.header ? slots.header() : (
                <h1>TODO</h1>
              )}
              {slots.default ? slots.default() : (
                <div class="card-content">
                    {slots.title ? slots.title() : (
                      <h2 class="card-title">{props.title}</h2>
                    )}
                    {slots.subtitle ? slots.subtitle() : (
                      <h5 class="card-subtitle">{props.subtitle}</h5>
                    )}
                    <br />
                    {slots.content ? slots.content() : (
                      <p>{props.text}</p>
                    )}
                </div>
              )}
              {slots.footer ? slots.footer() : (
                <h1>TODO</h1>
              )}
          </div>
        );
    },
});