import { defineComponent, h } from 'vue';
import { pascalCase } from 'change-case';

/**
 *
 * @param classes
 * @param props
 * @param tag
 */
export default (classes: string[], props: Record<string, unknown> = {}, tag = "div") => {
    return defineComponent({
        name: pascalCase(classes[0]),

        props: {
            /**
             * Default tag that the new component should have (but can be changed)
             */
            tag: {
                type: String,
                default: tag
            },

            ...props,
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
                            classes,
                            attrs.class
                        ],
                        style: {
                            ...attrs?.style || {}
                        }
                    },
                    slots.default?.()
                )
        }
    })
}
