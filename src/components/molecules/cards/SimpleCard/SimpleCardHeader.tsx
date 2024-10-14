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
         * TODO make component
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
         * TODO make component
         * WARNING: If there is no title, there is no subtitle
         */
        const cardTitle =
            slots.title || props.title || cardSub ?
                <component
                    is={props.titleTag}
                    class="card-title"
                >
                    {slots.title ? slots.title() : props.title}
                    {cardSub}
                </component>
                : null

        return () =>
            slots.default || slots.actions || cardTitle ?
                <div class={["card-header", variantsClasses.value]}>
                    {slots.default ? slots.default() : null}
                    <CardActions
                        v-slots={{
                            default: slots.actions,
                        }}
                    />
                    {cardTitle}
                </div>
                : null

    },
})