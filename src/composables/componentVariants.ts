import { computed } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { kebabCase } from 'change-case';

export interface IVariantsSettings {
    props?: Readonly<ExtractPropTypes<{
        variant?: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    }>>
    settings?: Record<string, unknown>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    enumItem?: any
}

/**
 *
 * @param props
 * @param defaults
 * @param prefix
 */
export default <T>({ props, settings, enumItem }: IVariantsSettings = {}, prefix = '') => {

    /**
     * Can be multiple, strings separated by space
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const variantsProps: Record<string, any> = {
        variant: {
            type: String,
            ...settings || {}
        },
        ...Object.fromEntries(
            Object.values(enumItem || {}).map((item) => [
                item,
                {
                    type: Boolean,
                    default: () => false
                }
            ])
        )
    }

    /**
     * Variants transformed into an array
     */
    const classes = computed(() => [
        ...new Set([
            ...(props?.variant ? ((props.variant || '') as string).split(' ') : [])
                .map((variant: string) => `${prefix}${variant}`) as T[],
            ...Object.entries(props || {})
                .filter(([key, value]) => value === true)
                .map(([key]) => {
                    const className = kebabCase(key);
                    if(Object.values(enumItem || {}).includes(className))
                        return prefix + className;
                })
        ])
    ].filter(Boolean))

    /**
     * Translated variants in the css classes that contains the logic
     */
    const classString = computed(() => classes.value.join(' '))

    return {
        props: variantsProps,
        classes,
        classString
    }
}