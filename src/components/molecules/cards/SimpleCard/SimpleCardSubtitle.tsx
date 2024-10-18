import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'SimpleCardSubtitle',
    props:{
        text: {
            type: String,
            required: false
        },
        tag: {
            type: String,
            default: () => "span"
        },
    },
    setup(props, { slots }) {
        return () =>
            (slots.default || props.text) && h(props.tag, { class: 'card-subtitle' }, slots.default ? slots.default() : props.text)
    },
})