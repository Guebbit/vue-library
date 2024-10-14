import './Icon.scss';
import { defineComponent } from 'vue';
import useComponentSizes from '../../../../composables/componentSizes.ts'

/**
 * Outside setup only composable
 */
const {
    props: sizeProps
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

        /**
         * TODO function?
         */
        return () =>
            slots.default
            && (() => {
                if(!sizeClass.value)
                    return slots.default()
                const iconVNode = slots.default?.()[0]
                if (iconVNode) {
                    iconVNode.props = {
                        ...iconVNode.props,
                        class: `${iconVNode.props?.class || ''} ${sizeClass.value}`
                    }
                    return iconVNode
                }
                return slots.default()
            })();
    },
});
