import { defineComponent, h } from 'vue'
import CardTitle from './SimpleCardTitle.ts'
import CardSubtitle from './SimpleCardSubtitle.tsx'
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
        const cardSub =
            <CardSubtitle
                text={props.sub}
                tag={props.subTag}
                v-slot={{
                    default: slots.sub
                }}
            />

        /**
         * CardTitle
         */
        const cardTitle =
            <CardTitle
                text={props.title}
                tag={props.titleTag}
                v-slots={{
                    default: () => (
                        <>
                            {slots.title ? slots.title() : props.title}
                            {cardSub}
                        </>
                    )
                }}
            />

        /**
         * Template
         */
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