import './SimpleButton.scss'
import { defineComponent, computed } from 'vue'

import useComponentGenerics from '../../../../composables/componentGenerics.ts'
import useComponentSizes from '../../../../composables/componentSizes.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'

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
    animationProps
} = useComponentGenerics()
const {
    prop: sizeProps
} = useComponentSizes('button-')
const {
    prop: variantProps
} = useComponentVariants<ESimpleButtonVariants>({}, 'button-')

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
        }
    },

    setup(props, { attrs, slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: sizeClass
        } = useComponentSizes('button-', props)
        const {
            classes: variantClasses
        } = useComponentVariants<ESimpleButtonVariants>({ props }, 'button-')

        /**
         * Aggregator of all the classes of component
         */
        const classes = computed(() => [
            'simple-button',
            sizeClass.value,
            variantClasses.value,
            props.icon ? 'button-icon-only' : '',
            (props.animated || props.animatedHover) ? 'animate-on-hover' : '',
            (props.animated || props.animatedActive) ? 'animate-on-active' : '',
            props.active ? 'animate-active' : '',
            props.disabled ? 'button-disabled' : ''
        ]);

        /**
         *
         */
        const slotIcon =
            slots.icon
                && (() => {
                    // if icon slot was used, add the button-icon class to the node inserted by the user (if present)
                    const iconVNode = slots.icon?.()[0]
                    if (iconVNode) {
                        iconVNode.props = {
                            ...iconVNode.props,
                            class: `${iconVNode.props?.class || ''} button-icon` // Append your class here
                        }
                        return iconVNode
                    }
                    return slots.icon()
                })();

        /**
         *
         */
        const slotContent =
            slots.default && (() => {
                // variant
                if(classes.value.includes("button-icon-only")){
                    // if it's icon only (by prop or by variant or by class)
                    const iconVNode = slots.default?.()[0]
                    if (iconVNode){
                        iconVNode.props = {
                            ...iconVNode.props,
                            class: `${iconVNode.props?.class || ''} button-icon` // Append your class here
                        }
                        return iconVNode
                    }
                }
                // regular
                return slots.default();
            })();

        /**
         * Template
         */
        return () => (
            <button
                class={classes.value}
                {...attrs}
                disabled={props.disabled || props.variant?.includes('disabled')}
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