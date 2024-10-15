import { createApp } from 'vue';
import App from './App.vue';

// Import VitePress CSS
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/base.css';
import 'vitepress/dist/client/theme-default/styles/fonts.css';
import 'vitepress/dist/client/theme-default/styles/icons.css';
import 'vitepress/dist/client/theme-default/styles/utils.css';
import '../docs/.vitepress/theme/index.scss';
import '../docs/theme.scss';

createApp(App)
    .mount('#app');