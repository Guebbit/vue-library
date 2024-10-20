import { defineComponent, h } from 'vue'
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
                    {
                        slots.default ?
                            slots.default() :
                            props.text || slots.text ?
                                h(props.tag, {},slots.text ? slots.text() : props.text)
                                : null
                    }
                    {slots.actions ? <CardActions>{slots.actions()}</CardActions> : null}
                </div>
                : null
    }
})
