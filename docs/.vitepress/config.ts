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
                text: 'Theme',
                link: '/theme.md'
            },
            {
                text: 'Atoms',
                collapsed: true,
                items: [
                    {
                        text: 'Animations',
                        collapsed: false,
                        items: [
                            {
                                text: 'Wallpaper',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Raindrop Concentric',
                                        link: '/atoms/animations/RaindropConcentric.md',
                                    },
                                ]
                            },
                            {
                                text: 'Reveal',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Advancing Moon Reveal',
                                        link: '/atoms/animations/AdvancingMoonReveal.md',
                                    },
                                ]
                            },
                            {
                                text: 'Pages scroll',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Scroll Down Arrow',
                                        link: '/atoms/animations/ScrollDownArrow.md',
                                    },
                                    {
                                        text: 'Scroll Down Mouse',
                                        link: '/atoms/animations/ScrollDownMouse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Map Pins',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Pin pulse',
                                        link: '/atoms/animations/MapPinPulse.md',
                                    }
                                ]
                            },
                            {
                                text: 'Progression',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Book Front Load',
                                        link: '/atoms/animations/BookFrontLoad.md',
                                    },
                                    {
                                        text: 'Book Side Load',
                                        link: '/atoms/animations/BookSideLoad.md',
                                    },
                                    {
                                        text: 'Gear Load',
                                        link: '/atoms/animations/GearLoad.md',
                                    },
                                    {
                                        text: 'Icon Showcase Load',
                                        link: '/atoms/animations/IconShowcaseLoad.md',
                                    },
                                    {
                                        text: 'Rotating Squares',
                                        link: '/atoms/animations/RotatingSquares.md',
                                    },
                                    {
                                        text: 'Solar System Load',
                                        link: '/atoms/animations/SolarSystemLoad.md',
                                    },
                                ]
                            },
                            {
                                text: 'Effects and forms',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Effect Color Popup',
                                        link: '/atoms/animations/EffectColorPopup.md',
                                    },
                                    {
                                        text: 'Effect Mirror Reflection',
                                        link: '/atoms/animations/EffectMirrorReflection.md',
                                    },
                                    {
                                        text: 'Status Circle',
                                        link: '/atoms/animations/StatusCircle.md',
                                    },
                                    {
                                        text: 'Effect Shape Slash',
                                        link: '/atoms/animations/EffectShapeSlash.md',
                                    },
                                    {
                                        text: 'Trapezoid Form',
                                        link: '/atoms/animations/TrapezoidForm.md',
                                    },
                                ],
                            },
                            {
                                text: 'Panel Askew Doors',
                                link: '/atoms/animations/PanelAskewDoors.md',
                            },
                        ],
                    },
                    {
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'Cyberpunk Button',
                                link: '/atoms/buttons/CyberpunkButton.md',
                            },
                            {
                                text: 'Parallelogram Button',
                                link: '/atoms/buttons/ParallelogramButton.md',
                            },
                            {
                                text: 'Simple Button',
                                link: '/atoms/buttons/SimpleButton.md',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Calendar Card',
                                link: '/atoms/cards/CalendarCard.md',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Panel (basic)',
                                link: '/atoms/panels/SimplePanel.md'
                            },
                        ]
                    },
                    {
                        text: 'Highlights',
                        collapsed: false,
                        items: [
                            {
                                text: 'Corner Ribbon',
                                link: '/atoms/highlights/CornerRibbon.md',
                            },
                            {
                                text: 'Highlight Belt',
                                link: '/atoms/highlights/HighlightBelt.md',
                            },
                            {
                                text: 'Highlight Border',
                                link: '/atoms/highlights/HighlightBorder.md',
                            },
                            {
                                text: 'Highlight Line',
                                link: '/atoms/highlights/HighlightLine.md',
                            },
                            {
                                text: 'Highlight Popup',
                                link: '/atoms/highlights/HighlightPopup.md',
                            },
                            {
                                text: 'Highlight Rollup',
                                link: '/atoms/highlights/HighlightRollup.md',
                            },
                        ]
                    },
                    {
                        text: 'Generics',
                        collapsed: false,
                        items: [
                            {
                                text: 'Simple List',
                                link: '/atoms/generics/SimpleList.md',
                            },
                            {
                                text: 'Simple Icon Text',
                                link: '/atoms/generics/SimpleTextIcon.md',
                            },
                            {
                                text: 'Special Title',
                                link: '/atoms/generics/SpecialTitle.md',
                            },
                            {
                                text: 'Svg Title',
                                link: '/atoms/generics/SvgTitle.md',
                            },
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
                        text: 'Buttons',
                        collapsed: false,
                        items: [
                            {
                                text: 'Expressive Button',
                                link: '/molecules/buttons/ExpressiveButton.md',
                            },
                            {
                                text: 'Icon Focus Button',
                                link: '/molecules/buttons/IconFocusButton.md',
                            },
                            {
                                text: 'Neon Button',
                                link: '/molecules/buttons/NeonButton.md',
                            },
                            {
                                text: 'Social Button',
                                link: '/molecules/buttons/SocialButton.md',
                            },
                        ]
                    },
                    {
                        text: 'Cards',
                        collapsed: false,
                        items: [
                            {
                                text: 'Blockquote Simple',
                                link: '/molecules/cards/SimpleBlockquote.md',
                            },
                            {
                                text: 'Book Card',
                                link: '/molecules/cards/BookCard.md',
                            },
                            {
                                text: 'Countdown Card',
                                link: '/molecules/cards/CountdownCard.md',
                            },
                            {
                                text: 'Credit Card',
                                link: '/molecules/cards/CreditCard.md',
                            },
                            {
                                text: 'Popup Card',
                                link: '/molecules/cards/PopupCard.md',
                            },
                            {
                                text: 'Simple Cards (theme)',
                                link: '/molecules/cards/SimpleCard.md',
                            },
                            {
                                text: 'Simple Cards (variants)',
                                link: '/molecules/cards/SimpleCard-custom.md',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'ActionPanel',
                                link: '/molecules/panels/ActionPanel.md',
                            },
                            {
                                text: 'Opening Hours List',
                                link: '/molecules/panels/OpeningHoursList.md',
                            },
                            {
                                text: 'Typography Panel',
                                link: '/molecules/panels/BlogPostCard.md',
                            },
                        ]
                    },
                    // {
                    //     text: 'Animations',
                    //     collapsed: false,
                    //     items: [
                    //         {
                    //             text: 'Circular Progress Bar CSS',
                    //             link: '/molecules/animations/CircularProgressBarCss.md',
                    //         },
                    //         {
                    //             text: 'Circular Progress Bar SVG',
                    //             link: '/molecules/animations/CircularProgressBarSvg.md',
                    //         },
                    //     ]
                    // },
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
                                text: 'Choose Option Card',
                                link: '/organisms/cards/ChooseOptionCard.md',
                            },
                            {
                                text: 'Event Lite Card',
                                link: '/organisms/cards/EventLiteCard.md',
                            },
                            {
                                text: 'Event Long Card',
                                link: '/organisms/cards/EventLongCard.md',
                            },
                            {
                                text: 'Event Minimal Card',
                                link: '/organisms/cards/EventMinimalCard.md',
                            },
                            {
                                text: 'Info Hover Card',
                                link: '/organisms/cards/InfoHoverCard.md',
                            },
                            {
                                text: 'Image Slash Card',
                                link: '/organisms/cards/ImageSlashCard.md',
                            },
                            {
                                text: 'Overflow Card',
                                link: '/organisms/cards/OverflowCard.md',
                            },
                            {
                                text: 'Pricing Card',
                                link: '/organisms/cards/PricingCard.md',
                            },
                            {
                                text: 'Stats Team Card',
                                link: '/organisms/cards/StatsTeamCard.md',
                            },
                        ]
                    },
                    {
                        text: 'Panels',
                        collapsed: false,
                        items: [
                            {
                                text: 'Timeline Tree',
                                link: '/organisms/panels/TimelineTree.md',
                            },
                        ]
                    }
                ]
            }
        ]
    }
})