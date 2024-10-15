import DefaultTheme from "vitepress/theme";
import "./index.scss";
import MainLayout from './MainLayout.vue'
import createTheme from '../../../src/plugins/createTheme'

export default {
    extends: DefaultTheme,
    Layout: MainLayout,
    enhanceApp({ app }) {
        app.use(createTheme, {
            "primary": {
                "globals": {
                    "color": "0 188 212",
                    "on-color": "255 255 255",
                    "shadow-color": "0 255 0",
                    "active-color": "255 152 0",
                    "active-on-color": "0 0 0",
                    "active-shadow-color": "255 0 255",
                },
                "colors": {
                    "color": "0 188 212",
                    "on-color": "255 255 255",
                    "shadow-color": "0 255 0",
                    "active-color": "255 152 0",
                    "active-on-color": "0 0 0",
                    "active-shadow-color": "255 0 255",
                }
            }
        });
    }
}