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
    props: variantsProps
} = useComponentVariants<ESimpleCardFooterVariants>()

export default defineComponent({
    name: 'SimpleCardFooter',
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
         * Template
         */
        return () =>
            slots.default || slots.actions ?
                <div class={["card-footer", variantsClasses.value]}>
                    {slots.default ? slots.default() : null}
                    {slots.actions ? <CardActions>{slots.actions()}</CardActions> : null}
                </div>
                : null
    }
})
