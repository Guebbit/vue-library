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
    prop: variantProps
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
        ...variantProps,
    },
    setup(props, { slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: variantClasses
        } = useComponentVariants<ESimpleCardActionsVariants>({ props }, 'card-actions-');

        /**
         * Template
         */
        return () => (
            <div class={['card-actions', variantClasses.value]}>{slots.default?.()}</div>
        )
    },
})