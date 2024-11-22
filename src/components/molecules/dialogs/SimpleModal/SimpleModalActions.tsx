import { computed, defineComponent } from 'vue'

import { THEME_CLASS_PREFIX } from '../../../../_vars'
import useComponentVariants from '../../../../composables/componentVariants'
import editSlotItems from '../../../../utils/editSlotItems'

export enum ESimpleModalActionsVariants {
    START = 'start',
    CENTER = 'center',
    END = 'end',
    VERTICAL = 'vertical',
}

/**
 * Outside setup only composable
 */
const {
    props: variantsProps
} = useComponentVariants<ESimpleModalActionsVariants>({
    settings: {
        default: () => ESimpleModalActionsVariants.START
    }
})

/**
 * Template
 */
export default defineComponent({
    name: 'SimpleModalActions',
    props: {
        ...variantsProps,
    },
    setup(props, { slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleModalActionsVariants>({ props }, THEME_CLASS_PREFIX + 'card-section-');

        /**
         *
         */
        const defaultSlot = computed(() => editSlotItems(slots.default, {
            classes: [THEME_CLASS_PREFIX + "card-icon"]
        }, {
            tags: ["img", "svg"]
        }));

        /**
         * Template
         */
        return () =>
            defaultSlot.value.length > 0 && <div class={[THEME_CLASS_PREFIX + 'card-actions', variantsClasses.value]}>{defaultSlot.value}</div>
    },
})
