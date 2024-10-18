import './SimpleButton.scss'
import { defineComponent, computed } from 'vue'

import useComponentGenerics from '../../../../composables/componentGenerics.ts';
import useComponentVariants from '../../../../composables/componentVariants.ts';
import useComponentSizes from '../../../../composables/componentSizes.ts';
import useComponentThemes from '../../../../composables/componentThemes.ts';
import editSlotItems from '../../../../utils/editSlotItems.ts'

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
} = useComponentGenerics()
const {
    props: sizeProps
} = useComponentSizes()
const {
    props: variantsProps
} = useComponentVariants<ESimpleButtonVariants>()
const {
    props: themeProps
} = useComponentThemes();

/**
 * Component
 */
export default defineComponent({
    name: 'SimpleButton',

    props: {
        ...variantsProps,
        ...animationProps,
        ...sizeProps,
        ...themeProps,

        /**
         * Display only the icon without text
         * (equivalent of icon-only variant)
         */
        icon: {
            type: Boolean,
            default: () => false
        },

        /**
         * Image src (if not slot)
         */
        image: {
            type: String,
            default: () => ''
        },

        /**
         * Image alt (if not slot)
         */
        imageAlt: {
            type: String,
            default: () => ''
        },

        /**
         * Button text (if not slot)
         */
        text: {
            type: String,
            default: () => ''
        },

        /**
         * Button is disabled
         */
        disabled: {
            type: Boolean,
            default: () => false
        },
    },

    setup(props, { attrs, slots }) {
        /**
         * Setup only composable
         */
        const {
            animationClasses
        } = useComponentGenerics({ props })
        const {
            classes: sizeClass
        } = useComponentSizes('button-', props)
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleButtonVariants>({ props }, 'button-')
        const {
            styles: themeStyles
        } = useComponentThemes({ props }, "simple-button-");

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            ...new Set([
                'simple-button',
                animationClasses.value,
                sizeClass.value,
                variantsClasses.value,
                props.icon ? 'button-icon-only' : '',
                props.disabled ? 'button-disabled' : ''
            ])
        ]);

        /**
         *
         */
        const slotIcon = editSlotItems(slots.icon, {
            className: "button-icon"
        });

        /**
         *
         */
        const slotContent = classes.value.includes("button-icon-only") ? editSlotItems(slots.default, {
            className: "button-icon"
        }) : slots.default?.();

        /**
         * Template
         */
        return () => (
            <button
                class={[attrs.class, classes.value]}
                style={{ ...attrs.style || {}, ...themeStyles.value || {} }}
                // WARNING: false positive
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                disabled={props.disabled || (props as any).variant?.includes('disabled')}
            >
                {
                    slotIcon ?
                        slotIcon : props.image && (
                            <img
                                src={props.image}
                                alt={props.imageAlt}
                                class="button-image"
                            />
                        )
                }
                { slotContent ? slotContent : !props.icon ? props.text : '' }
            </button>
        )
    }
})