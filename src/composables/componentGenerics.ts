import { computed } from 'vue'
import { THEME_CLASS_PREFIX } from '../_vars.ts'

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
    (props?.animated || props?.animatedHover) ? THEME_CLASS_PREFIX + 'animate-on-hover' : undefined,
    (props?.animated || props?.animatedActive) ? THEME_CLASS_PREFIX + 'animate-on-active' : undefined,
    props?.active ? THEME_CLASS_PREFIX + 'animate-active' : undefined,
  ].filter(Boolean));

  return {
    animationProps,
    animationClasses
  }
}