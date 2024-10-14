import { defineComponent } from 'vue'
import CardActions from './SimpleCardActions.tsx'

export default defineComponent({
    name: 'SimpleCardContent',
    props: {
        /**
         * Content text (if not slot)
         */
        text: {
            type: String,
            default: () => ''
        },

        /**
         * Tag of text (if not slot)
         */
        tag: {
            type: String,
            default: () => 'p'
        },
    },
    setup(props, { slots }) {
        /**
         * Template
         */
        return () =>
            slots.default || slots.actions || props.text ?
                <div class="card-content">
                    {slots.default ? slots.default() : props.text ? (
                        <component is={props.tag}>{props.text}</component>
                    ) : null}
                    {slots.actions ? <CardActions>{slots.actions()}</CardActions> : null}
                </div>
                : null
    }
})
