export interface IGenericProps {
  // props?: {
  //   animated?: boolean,
  //   animatedHover?: boolean,
  //   animatedActive?: boolean,
  //   active?: boolean,
  // },
  settings?: Record<string, unknown>
}

/**
 *
 * @param settings
 */

export default ({ settings }: IGenericProps = {}) => {


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

  return {
    animationProps
  }
}