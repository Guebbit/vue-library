import themeGenerator, { type IThemeGlobal } from '../composables/themeGenerator.ts';

/**
 * Create starter theme tree
 * @param themes
 */
export default (themes: Record<string, IThemeGlobal>) => {
    const {
        set
    } = themeGenerator();
    set(themes);
}