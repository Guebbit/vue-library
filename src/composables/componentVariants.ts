import { computed } from 'vue'

/**
 *
 * @param prefix
 * @param props
 */
export default <T extends string>(prefix = "", props: { variant?: string } = {}) => {
  /**
   * Can be multiple, strings separated by space
   */
  const prop = {
    variant: {
      type: String,
      required: false
    }
  };

  /**
   * Variants transformed into an array
   */
  const data = computed(() =>
    (props.variant ? props.variant.split(' ') : [])
      .map((variant) => `${prefix}${variant}`) as T[]
  );

  /**
   * Translated variants in the css classes that contains the logic
   */
  const classes = computed(() => data.value.join(" "));

  return {
    prop,
    data,
    classes
  }
}