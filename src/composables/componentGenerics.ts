import { computed } from 'vue'
import type { PropType } from 'vue'

/**
 *
 * @param props
 * @param prefix
 */
export default (props = {}, prefix = "") => {

  /**
   *
   */
  const animationProps = {
    /**
     * animate on hover and on active
     */
    animated: {
      type: Boolean,
      default: () => true,
    },

    /**
     * Animate on hover only
     */
    animatedHover: {
      type: Boolean,
      default: () => false,
    },

    /**
     * Animate on active only
     */
    animatedActive: {
      type: Boolean,
      default: () => false,
    },

    /**
     * Button is active
     */
    active: {
      type: Boolean,
      default: () => false,
    },
  };

  /**
   *
   */
  const themeProps = {
    /**
     * Shorthand of theme prop
     */
    color: {
      type: String,
      default: () => "",
    },

    /**
     * Button is active
     */
    theme: {
      type: Object as PropType<Record<string, string>>,
      default: () => {
        return {}
      },
    },
  }

  /**
   * Array of pairs: variable name and value, to transform into an array of instructions (no duplicates)
   */
  const themeVars = computed(() => {
  // :theme="{ background: red }"
  //   if(props.theme)
  //     console.log("AAAAAAAAAAAAAAAA", props.theme)
    return {};
  })

  /**
   * css var(--name) that user can implement
   */
  const themeStyle = computed(() => "") // themeVars.value.join(" ")

  return {
    animationProps,
    themeProps,
    themeVars,
    themeStyle
  }
}