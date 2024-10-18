import { computed } from 'vue'
import type { ExtractPropTypes } from 'vue'

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
     *
     * @param str
     */
    function toKebabCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

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
    const data = computed(() => [
        ...(props?.variant ? ((props.variant || '') as string).split(' ') : [])
            .map((variant: string) => `${prefix}${variant}`) as T[],
        ...Object.entries(props || {})
            .filter(([key, value]) => value === true)
            .map(([key]) => {
                const className = toKebabCase(key);
                if(Object.values(enumItem || {}).includes(className))
                    return prefix + className;
            })
    ])

    /**
     * Translated variants in the css classes that contains the logic
     */
    const classes = computed(() => data.value.join(' '))

    return {
        props: variantsProps,
        data,
        classes
    }
}