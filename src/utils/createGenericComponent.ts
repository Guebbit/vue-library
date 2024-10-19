import { defineComponent, h } from 'vue'
import { pascalCase } from 'change-case'
import { propsFactory } from './propsFactory.ts'

/**
 *
 * @param name
 * @param props
 * @param tag
 */
export default (name: string, props: unknown, tag = "div") => {
    return defineComponent({
        name: pascalCase(name),

        props: {
            /**
             * Default tag that the new component should have (but can be changed)
             */
            tag: {
                type: String,
                default: tag
            },

            /**
             *
             */
            ...propsFactory({
                class: [String, Array, Object] as PropType<ClassValue>,
                style: {
                    type: [String, Array, Object] as PropType<StyleValue>,
                    default: null,
                },
                ...props,
            })
        },

        setup(props, { attrs, slots }) {
            console.log("CHECK props", {
                ...props
            })
            console.log("CHECK attrs", {
                ...attrs
            })
            return () =>
                h(
                    props.tag,
                    {
                        class: [
                            props.class,
                            attrs.class
                        ],
                        style: {
                            ...props.style,
                            ...attrs.style
                        }
                    },
                    slots.default?.()
                )
        }
    })
}
