import { computed } from 'vue'

export interface IVariantsSettings {
  props?: {
    variant?: string
  },
  settings?: Record<string, unknown>
}

/**
 *
 * @param props
 * @param defaults
 * @param prefix
 */
export default <T extends string>({ props, settings }: IVariantsSettings = {}, prefix = "") => {
  /**
   * Can be multiple, strings separated by space
   */
  const variantsProps = {
    variant: {
      type: String,
      ...settings || {}
    }
  };

  /**
   * Variants transformed into an array
   */
  const data = computed(() =>
    (props?.variant ? (props.variant || "").split(' ') : [])
      .map((variant) => `${prefix}${variant}`) as T[]
  );

  /**
   * Translated variants in the css classes that contains the logic
   */
  const classes = computed(() => data.value.join(" "));

  return {
    props: variantsProps,
    data,
    classes
  }
}