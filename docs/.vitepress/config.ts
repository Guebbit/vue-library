import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default defineConfig({
    vite: {
        plugins: [
            vueJsx()
        ]
    },
    lang: 'en-US',
    title: 'Guebbit Vue Library',
    description: 'Guebbit\'s personal VUE Library (MIT license, free to use)',
    themeConfig: {
        logo: '/logotype.svg',
        siteTitle: 'VUE Library',
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/Guebbit/vue-library'
            },
            {
                text: 'Helper framework & libraries',
                items: [
                    {
                        text: 'Vuetify',
                        link: 'https://vuetifyjs.com/en/'
                    }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Workbench',
                link: '/workbench.md'
            },
            {
                text: 'Atoms',
                collapsed: true,
                items: [
                    {
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'SimpleButton',
                                link: '/atoms/buttons/SimpleButton.md'
                            }
                        ]
                    },
                    {
                        text: 'Utilities',
                        collapsed: false,
                        items: [
                            {
                                text: 'AspectRatio',
                                link: '/atoms/utilities/AspectRatio.md'
                            },
                            {
                                text: 'Icon',
                                link: '/atoms/utilities/Icon.md'
                            },
                            {
                                text: 'Media',
                                link: '/atoms/utilities/Media.md'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Molecules',
                collapsed: true,
                items: [
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Book Card',
                                link: '/molecules/cards/BookCard.md'
                            },
                            {
                                text: 'Credit Card',
                                link: '/molecules/cards/CreditCard.md'
                            },
                            {
                                text: 'Simple Card',
                                link: '/molecules/cards/SimpleCard.md'
                            }
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Panel (basic)',
                                link: '/molecules/panels/SimplePanel.md'
                            },
                            {
                                text: 'Action Panel',
                                link: '/molecules/panels/ActionPanel.md'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Organisms',
                collapsed: true,
                items: [
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Stats Team Card',
                                link: '/organisms/cards/StatsTeamCard.md'
                            }
                        ]
                    }
                ]
            }
        ]
    }
})