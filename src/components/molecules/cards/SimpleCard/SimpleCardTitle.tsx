import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'SimpleCardTitle',
    props:{
        text: {
            type: String,
            required: false
        },
        tag: {
            type: String,
            default: () => "h3"
        },
    },
    setup(props, { slots }) {
        return () =>
            (slots.default || props.text) && h(props.tag, { class: 'card-title' }, slots.default ? slots.default() : props.text)
    },
})