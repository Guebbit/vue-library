import './Icon.scss';
import { computed, defineComponent } from 'vue'
import { THEME_CLASS_PREFIX } from '../../../../_vars'
import useComponentSizes from '../../../../composables/componentSizes'
import editSlotItems from '../../../../utils/editSlotItems'

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
        } = useComponentSizes(THEME_CLASS_PREFIX + 'simple-icon-', props);

        const slotDefault = computed(() => editSlotItems(slots.default, {
            classes: [sizeClass.value]
        }));

        /**
         * Template
         */
        return () => slotDefault.value;
    },
});
