import './Icon.scss';
import { defineComponent } from 'vue';
import useComponentSizes from '../../../../composables/componentSizes.ts'

/**
 * Outside setup only composable
 */
const {
    prop: sizeProps
} = useComponentSizes()

/**
 * Component
 */
export default defineComponent({
    name: 'Icon',

    props: {
        ...sizeProps
    },

    setup(props, { slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: sizeClass
        } = useComponentSizes('simple-icon-', props);

        return () =>
            slots.default
            && (() => {
                if(!sizeClass.value)
                    return slots.default()
                // if icon slot was used, add the button-icon class to the node inserted by the user (if present)
                const iconVNode = slots.default?.()[0]
                if (iconVNode) {
                    iconVNode.props = {
                        ...iconVNode.props,
                        class: `${iconVNode.props?.class || ''} ${sizeClass.value}` // Append your class here
                    }
                    return iconVNode
                }
                return slots.default()
            })();
    },
});
