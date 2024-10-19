import { computed } from 'vue'

export interface IGenericProps {
  props?: {
    animated?: boolean,
    animatedHover?: boolean,
    animatedActive?: boolean,
    active?: boolean,
  },
  settings?: Record<string, unknown>
}

/**
 *
 * @param settings
 */

export default ({ props, settings }: IGenericProps = {}) => {

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
      ...settings?.animated || {}
    },

    /**
     * Animate on hover only
     */
    animatedHover: {
      type: Boolean,
      default: () => false,
      ...settings?.animatedHover || {}
    },

    /**
     * Animate on active only
     */
    animatedActive: {
      type: Boolean,
      default: () => false,
      ...settings?.animatedActive || {}
    },

    /**
     * Button is active
     */
    active: {
      type: Boolean,
      default: () => false,
      ...settings?.active || {}
    },
  };

  /**
   *
   */
  const animationClasses = computed(() => [
    (props?.animated || props?.animatedHover) ? 'animate-on-hover' : undefined,
    (props?.animated || props?.animatedActive) ? 'animate-on-active' : undefined,
    props?.active ? 'animate-active' : undefined,
  ].filter(Boolean));

  return {
    animationProps,
    animationClasses
  }
}