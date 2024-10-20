import { defineComponent } from 'vue'

import { THEME_CLASS_PREFIX } from '../../../../_vars.ts'
import useComponentVariants from '../../../../composables/componentVariants.ts'
import editSlotItems from '../../../../utils/editSlotItems.ts'

export enum ESimpleCardActionsVariants {
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
} = useComponentVariants<ESimpleCardActionsVariants>({
    settings: {
        default: () => ESimpleCardActionsVariants.START
    }
})

/**
 * Template
 */
export default defineComponent({
    name: 'SimpleCardActions',
    props: {
        ...variantsProps,
    },
    setup(props, { slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: variantsClasses
        } = useComponentVariants<ESimpleCardActionsVariants>({ props }, THEME_CLASS_PREFIX + 'card-section-');

        /**
         *
         */
        const defaultSlot = editSlotItems(slots.default, {
            classes: [THEME_CLASS_PREFIX + "card-icon"]
        }, {
            tags: ["img", "svg"]
        });

        /**
         * Template
         */
        return () =>
            slots.default && slots.default.length > 0 && <div class={[THEME_CLASS_PREFIX + 'card-actions', variantsClasses.value]}>{defaultSlot}</div>
    },
})