export default () => {
  /**
   * Can be multiple, strings separated by space
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

  return {
    animationProps
  }
}