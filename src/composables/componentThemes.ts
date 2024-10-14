import { computed } from 'vue'
import type { PropType, CSSProperties } from 'vue';
import useThemeGenerator from './themeGenerator.ts'

export interface IThemeProps {
  props?: {
    color?: string,
    theme?: Record<string, string>,
  },
  settings?: Record<string, unknown>
}

/**
 * TODO da ripensare.
 *  Come applicare sia il tema light che il tema dark?
 *  Come applicare il css come avviene per il theme.scss di css-ui?
 *
 * @param props
 * @param settings
 * @param prefix
 */
export default ({ props, settings }: IThemeProps = {}, prefix = "") => {
  const {
    themes: themeGlobal
  } = useThemeGenerator();

  /**
   *
   */
  const themeProps = {
    /**
     * Use a theme already defined in themeGlobal
     */
    color: {
      type: String,
      default: () => "",
      ...settings?.color || {}
    },

    /**
     * How to setup custom var(--cssvar) instructions
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
      Object.fromEntries([
        // TODO TEMPORARY (come gestire g-theme-?) ---------------------------------------
        ...Object.entries(props?.color && themeGlobal?.[props?.color]?.globals || {})
            .map(([key, value]) => [`--g-theme-${key}`, value]),
        // TODO --------------------------------------------------------------------------
        ...Object.entries({
          ...props?.color && themeGlobal?.[props?.color]?.colors || {},
          ...props?.theme || {},
        })
            .map(([key, value]) => {
              // if value is array of strings,
              // then the first is the value and the second a prefix
              if(Array.isArray(value))
                return [`--${value[1]}${key}`, value[0]];
              return [`--${prefix}${key}`, value];
            })
      ]) as CSSProperties
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
    styleString
  }
}