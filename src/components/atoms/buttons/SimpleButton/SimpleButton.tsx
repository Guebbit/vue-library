import './SimpleButton.scss'
import { defineComponent, computed } from 'vue'

import { THEME_VAR_PREFIX, THEME_CLASS_PREFIX } from '../../../../_vars'
import useComponentGenerics from '../../../../composables/componentGenerics';
import useComponentVariants from '../../../../composables/componentVariants';
import useComponentSizes from '../../../../composables/componentSizes';
import useComponentThemes from '../../../../composables/componentThemes';
import editSlotItems from '../../../../utils/editSlotItems'

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
        } = useComponentSizes(THEME_CLASS_PREFIX + 'button-', props)
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleButtonVariants>({ props }, THEME_CLASS_PREFIX + 'button-')
        const {
            styles: themeStyles
        } = useComponentThemes({ props }, THEME_VAR_PREFIX + "simple-button-");

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            ...new Set([
                THEME_CLASS_PREFIX + 'simple-button',
                ...animationClasses.value,
                ...variantsClasses.value,
                sizeClass.value,
                props.icon ? THEME_CLASS_PREFIX + 'button-icon-only' : undefined,
                props.disabled ? THEME_CLASS_PREFIX + 'button-disabled' : undefined
            ])
        ].filter(Boolean));

        /**
         *
         */
        const slotIcon = computed(() => editSlotItems(slots.icon, {
            classes: [THEME_CLASS_PREFIX + "button-icon"]
        }));

        /**
         *
         */
        const slotContent = computed(() => editSlotItems(slots.default, {
            classes: [THEME_CLASS_PREFIX + "button-icon"]
        }, {
            tags: ["svg"]
        }));

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
                    slotIcon.value.length > 0 ?
                        slotIcon.value :
                        props.image && (
                            <img
                                src={props.image}
                                alt={props.imageAlt}
                                class={THEME_CLASS_PREFIX + 'button-image'}
                            />
                        )
                }
                { slotContent.value.length > 0 ? slotContent.value : props.text }
            </button>
        )
    }
})
