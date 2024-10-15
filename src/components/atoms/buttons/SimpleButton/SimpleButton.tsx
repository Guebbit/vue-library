import './SimpleButton.scss'
import { defineComponent, computed } from 'vue'

import useComponentGenerics from '../../../../composables/componentGenerics.ts';
import useComponentVariants from '../../../../composables/componentVariants.ts';
import useComponentSizes from '../../../../composables/componentSizes.ts';
import useComponentThemes from '../../../../composables/componentThemes.ts';

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
        ...animationProps,
        ...sizeProps,
        ...variantsProps,
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
        }
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
            ...animationClasses.value,
            'simple-button',
            sizeClass.value,
            variantsClasses.value,
            props.icon ? 'button-icon-only' : '',
            props.disabled ? 'button-disabled' : ''
        ]);

        /**
         * TODO function?
         */
        const slotIcon =
            slots.icon
                && (() => {
                    const iconVNode = slots.icon?.()[0]
                    if (iconVNode) {
                        iconVNode.props = {
                            ...iconVNode.props,
                            class: `${iconVNode.props?.class || ''} button-icon`
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
                style={{ ...attrs.style || {}, ...themeStyles.value || {} }}
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