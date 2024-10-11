import { defineComponent } from 'vue'
import CardActions, { ESimpleCardActionsVariants } from './SimpleCardActions.tsx'
import useComponentVariants from '../../../../composables/componentVariants.ts'

export enum ESimpleCardFooterVariants {
    START = 'start',
    CENTER = 'center',
    END = 'end',
}

/**
 * Outside setup only composable
 */
const {
    prop: variantProps
} = useComponentVariants<ESimpleCardFooterVariants>()

export default defineComponent({
    name: 'SimpleCardFooter',
    props: {
        ...variantProps,
    },
    setup(props, { slots }) {
        /**
         * Setup only composable
         */
        const {
            classes: variantClasses
        } = useComponentVariants<ESimpleCardActionsVariants>({ props }, 'card-section-');

        /**
         * Template
         */
        return () =>
            slots.default || slots.actions ?
                <div class={["card-footer", variantClasses.value]}>
                    {slots.default ? slots.default() : null}
                    {slots.actions ? <CardActions>{slots.actions()}</CardActions> : null}
                </div>
                : null
    }
})
