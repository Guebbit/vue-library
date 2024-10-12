import { computed } from 'vue'
import type { PropType, CSSProperties } from 'vue'

export interface IThemeProps {
  props?: {
    color?: string,
    theme?: Record<string, string>,
  },
  settings?: Record<string, unknown>
}

/**
 *
 * @param props
 * @param settings
 * @param prefix
 */

export default ({ props, settings }: IThemeProps = {}, prefix = "") => {

  /**
   *
   */
  const themeProps = {
    /**
     * TODO inject\provide a theme file like it happens on vuetify (provideTheme, injectTheme)
     *  { themename: Record<string,string> } questo sceglierà tale tema da sostituire con quello fornito nella prop.theme
     * Shorthand of theme prop
     */
    color: {
      type: String,
      default: () => "",
      ...settings?.color || {}
    },

    /**
     * Button is active
     */
    theme: {
      type: Object as PropType<Record<string, string>>,
      default: () => {
        return {}
      },
      ...settings?.theme || {}
    },
  }

  /**
   * Object StyleValue compliant
   */
  const styles = computed(() =>
    Object.fromEntries(
        Object.entries(props.theme || {})
            .map(([key, value]) => [`--${prefix}${key}`, value])
    ) as CSSProperties
  )


  /**
   * css var(--name) that user can implement
   */
  const styleString = computed(() =>
      Object.entries(styles.value)
          .map(([key, value]) => `${key}: ${value};`)
          .join(' ')
  )

  return {
    props: themeProps,
    styles,
    // styleString
  }
}