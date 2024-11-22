import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import App from './App.vue';

// Import VitePress CSS
import 'vuetify/styles'
import '../docs/.vitepress/theme/index.scss';
import '../docs/theme.scss';

createApp(App)
    .use(createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'dark'
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
    }))
    .mount('#app');