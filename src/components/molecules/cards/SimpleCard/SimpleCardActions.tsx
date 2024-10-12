import { defineComponent } from 'vue'
import useComponentVariants from '../../../../composables/componentVariants.ts'

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
        } = useComponentVariants<ESimpleCardActionsVariants>({ props }, 'card-actions-');

        /**
         * Template
         */
        return () => (
            <div class={['card-actions', variantsClasses.value]}>{slots.default?.()}</div>
        )
    },
})