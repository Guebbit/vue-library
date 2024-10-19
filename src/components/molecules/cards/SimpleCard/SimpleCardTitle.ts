// import { defineComponent, h } from 'vue'
//
// export default defineComponent({
//     name: 'SimpleCardTitle',
//     props:{
//         text: {
//             type: String,
//             required: false
//         },
//         tag: {
//             type: String,
//             default: () => "h3"
//         },
//     },
//     setup(props, { slots }) {
//         if(1==1)
//             return null;
//         return () =>
//             (slots.default || props.text) && h(props.tag, { class: 'card-title' }, slots.default ? slots.default() : props.text)
//     },
// })


import createGenericComponent from "../../../../utils/createGenericComponent"

// eslint-disable-next-line @typescript-eslint/naming-convention
export const VCardTitle = createGenericComponent('card-title', {
    text: {
        type: String,
        required: false
    },
    tag: {
        type: String,
        default: () => "h3"
    },
})
export default VCardTitle;

export type VCardTitle = InstanceType<typeof VCardTitle>


