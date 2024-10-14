import type { App, Plugin } from 'vue';
import * as components from "../index.ts";

const plugin: Plugin = {
    install(app: App) {
        for (const prop in components) {
            if (Object.prototype.hasOwnProperty.call(components, prop)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const component = (components as any)[prop];
                if (component.name) {
                    app.component(component.name, component);
                }
            }
        }
    }
}

export default plugin