import './Icon.scss';
import { defineComponent } from 'vue';
import useComponentSizes from '../../../../composables/componentSizes.ts'
import editSlotItems from '../../../../utils/editSlotItems.ts'

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
         * Template
         */
        return () => editSlotItems(slots.default, {
            classes: sizeClass.value
        });
    },
});
