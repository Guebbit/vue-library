import { inject, provide, computed } from 'vue'
import type { InjectionKey } from 'vue';

export interface IThemeGlobal {
    /**
     * Specify if it's a dark or light theme,
     * to better control some UI details
     * TODO
     */
    dark?: boolean

    /**
     * Colors of theme
     * instruction => value
     */
    colors?: Record<string, string | [string, string]>

    /**
     * Colors of document root,
     * use a prefix like "g-theme-"
     * instruction => value
     */
    globals?: Record<string, string | [string, string]>

    /**
     * TODO
     * Specific colors for the components
     * component => instruction => value
     */
    components?: Record<string, Record<string, string>>
}

/**
 * Ideas:
 * https://vuetifyjs.com/en/features/theme/#javascript
 * https://github.com/vuetifyjs/vuetify/blob/ae33530ac17226ca942849bea364ee441ae1dd9f/packages/vuetify/src/composables/theme.ts#L211
 * https://github.com/vuetifyjs/vuetify/blob/ae33530ac17226ca942849bea364ee441ae1dd9f/packages/vuetify/src/framework.ts#L43
 */
export default () => {
    /**
     * Access to all themes that can be provided elsewhere
     */
    const themeSymbol: InjectionKey<Record<string, IThemeGlobal>> = Symbol.for('guebbit:themes');

    /**
     * Global theme object
     */
    const themes = inject(themeSymbol, {});

    /**
     * Access to all themes that can be provided elsewhere
     */
    const currentSymbol: InjectionKey<keyof typeof themes> = Symbol.for('guebbit:current-theme');

    /**
     * Name of theme currently in use
     */
    const currentName = inject(currentSymbol, "");

    /**
     * Theme in use
     */
    const current = computed(() => currentName && themes[currentName]);

    /**
     * Add a new theme (overwrite if exist)
     * Not one-liner with spreading ... to ensure reactivity is maintained
     *
     * @param name
     * @param themeData
     */
    const add = (name = "", themeData: IThemeGlobal = {}) => {
        themes[name] = themeData;
        provide(themeSymbol, themes);
    };

    /**
     * Edit a new theme (create if not exist)
     *
     * @param name
     * @param themeData
     */
    const edit = (name = "", themeData: IThemeGlobal = {}) => {
        themes[name] = { ...themes[name], ...themeData };
        provide(themeSymbol, themes);
    };

    /**
     * Set all themes, replacing the old theme tree
     * @param themeDictionary
     */
    const set = (themeDictionary: Record<string, IThemeGlobal>) => provide(themeSymbol, themeDictionary)
    
    /**
     * List of available themes
     */
    const list = computed(() => Object.keys(themes))

    /**
     *
     */
    return {
        themeSymbol,
        themes,
        currentSymbol,
        currentName,
        current,
        add,
        edit,
        set,
        list,
    }
}