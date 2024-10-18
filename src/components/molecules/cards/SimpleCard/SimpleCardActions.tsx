import { defineComponent, type VNode } from 'vue'
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
        } = useComponentVariants<ESimpleCardActionsVariants>({ props }, 'card-section-');

        /**
         *
         */
        const translatedSlot = editSlotItems(slots.default, {
            className: 'card-icon'
        }, {
            tags: ['img', 'svg']
        });

        /**
         * Template
         */
        return () =>
            slots.default && <div class={['card-actions', variantsClasses.value]}>{translatedSlot}</div>
    },
})