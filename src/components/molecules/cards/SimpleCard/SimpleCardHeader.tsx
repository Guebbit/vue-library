import { defineComponent } from 'vue'
import CardActions, { ESimpleCardActionsVariants } from './SimpleCardActions.tsx'
import useComponentVariants from '../../../../composables/componentVariants.ts'

export enum ESimpleCardHeaderVariants {
    START = 'start',
    CENTER = 'center',
    END = 'end',
}

/**
 * Outside setup only composable
 */
const {
    props: variantsProps
} = useComponentVariants<ESimpleCardHeaderVariants>()

export default defineComponent({
    name: 'SimpleCardHeader',
    props: {
        ...variantsProps,

        title: {
            type: String,
            required: false,
        },
        titleTag: {
            type: String,
            default: () => 'h3',
        },
        sub: {
            type: String,
            required: false,
        },
        subTag: {
            type: String,
            default: () => 'span',
        },
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
        const cardSub = (
            slots.sub || props.sub ?
                <component
                    is={props.subTag}
                    class="card-subtitle"
                >
                    {slots.sub ? slots.sub() : props.sub}
                </component>
                : null
        );

        /**
         * WARNING: If there is no title, there is no subtitle
         */
        const cardTitle =
            slots.title || props.title ?
                <component
                    is={props.titleTag}
                    class="card-title"
                >
                    {slots.title ? slots.title() : props.title}
                    {cardSub}
                </component>
                : null

        /**
         * Template
         */
        return () => (
            slots.default || slots.actions || cardTitle ?
                <div class={["card-header", variantsClasses.value]}>
                    {slots.actions ? <CardActions>{slots.actions()}</CardActions> : null}
                    {cardTitle}
                </div>
                : null
        )
    },
})