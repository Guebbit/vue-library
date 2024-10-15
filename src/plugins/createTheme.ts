import themeGenerator from '../composables/themeGenerator.ts';
import { ref } from 'vue';
import type { App, Plugin } from 'vue'

/**
 * Create starter theme tree
 * @param themes
 */
const plugin: Plugin = {
    install(app: App, options) {
        const { themeSymbol } = themeGenerator();
        app.provide(themeSymbol, ref(options))
    }
}

export default plugin