/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
module.exports = {
  lang: 'en-US',
  title: 'Guebbit Vue Library',
  description: "Guebbit's personal VUE Library (MIT license, free to use)",
  themeConfig: {
    // docsDir: 'docs',
    logo: "/logotype.svg",
    siteTitle: "VUE Library",
    search: {
      provider: 'local'
    },
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/Guebbit/vue-library',
      },
      {
        text: 'TODO websites',
        items: [
          {
            text: 'Guebbit',
            link: 'https://guebbit.com/'
          },
          {
            text: 'Rogheneach',
            link: 'https://rogheneach.com/'
          },
          {
            text: 'Mangabeats',
            link: 'http://mangabeats.guebbit.com/'
          },
          {
            text: 'vrmetagames',
            link: '#'
          }
        ]
      },
      {
        text: 'Helper framework & libraries',
        items: [
          {
            text: 'Vuetify',
            link: 'https://vuetifyjs.com/en/'
          },
        ]
      }
    ],
    sidebar: [
      {
        text: 'Workbench',
        link: 'workbench.md'
      },
      {
        text: 'Showcase',
        link: 'showcase.md'
      },
      {
        text: 'Blocks',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'Atoms',
            collapsible: true,
            collapsed: false,
            items: [
              {
                text: 'Media',
                link: '/atoms/Media.md'
              },
            ]
          },
          {
            text: 'Panels',
            collapsible: true,
            collapsed: false,
            items: [
              {
                text: 'Panel (basic)',
                link: '/blocks/Panel.md'
              },
              {
                text: 'Action Panel',
                link: '/blocks/ActionPanel.md'
              }
            ]
          },
          {
            text: 'Cards',
            collapsible: true,
            collapsed: false,
            items: [
              {
                text: 'Book Card',
                link: '/cards/BookCard.md'
              },
              {
                text: 'Credit Card',
                link: '/cards/CreditCard.md'
              },
              {
                text: 'Simple Card',
                link: '/cards/SimpleCard.md'
              },
              {
                text: 'Stats Team Card',
                link: '/cards/StatsTeamCard.md'
              },
            ],
          },
        ]
      },
    ],
  },
}
