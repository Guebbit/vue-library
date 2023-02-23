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
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/Guebbit/vue-library',
      },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
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
                link: '/atoms/media.md'
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
                link: '/blocks/panel.md'
              },
              {
                text: 'Action Panel',
                link: '/blocks/actionPanel.md'
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
                text: 'User Card Simple',
                link: '/cards/UserCardSimple.md'
              },
            ],
          },
        ]
      },
    ],
  },
}
