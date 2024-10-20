import { NightwatchBrowser } from 'nightwatch';
import nightwatchCheckRules from '../utils/nightwatchCheckRules'
import { THEME_CLASS_PREFIX } from '../../src/_vars';

describe('SimpleButton Component E2E Tests - based on the documentation, page /atoms/buttons/SimpleButton.html', function () {
  this.retries(3);

  /**
   * Open page
   */
  before(function (browser: NightwatchBrowser, done: () => void) {
    return browser
      .url(process.env.VUE_APP_BASE_URL + '/atoms/buttons/SimpleButton.html')
        .waitForElementVisible('.'+THEME_CLASS_PREFIX+'simple-button', 10000)
        // Add global theme for these tests
        .click('#themeCheckbox')
        // wait for them to be applied
        .pause(500)
        .perform(() => done());
  });

  it('Check BASICS button characteristics', async (browser: NightwatchBrowser) =>
      nightwatchCheckRules(browser, '#test-basics .'+THEME_CLASS_PREFIX+'simple-button', [
        {
          css: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "background-color": "rgba(0, 188, 212, 1)",
          },
          html: [
            "DEFAULT"
          ],
        },
        {
          css: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "background-color": "rgba(0, 188, 212, 1)",
          },
          html: [
            "<svg viewBox=\"0 0 24 24\" class=\""+THEME_CLASS_PREFIX+"button-icon\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg> ",
            "DEFAULT"
          ],
        },
        {
          css: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "background-color": "rgba(0, 188, 212, 1)",
          },
          html: [
            "<svg viewBox=\"0 0 24 24\" class=\""+THEME_CLASS_PREFIX+"button-icon\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg> ",
            "SLOT"
          ],
        },
      ])
  );

  it('Check REGULAR button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-regulars .'+THEME_CLASS_PREFIX+'simple-button', [
      {
        attributes: [
          "disabled"
        ],
        css:{
          "opacity": "0.25",
        },
        html: [
          "DISABLED"
        ],
      },
      {
        html: [
          "<button class=\""+THEME_CLASS_PREFIX+"simple-button "+THEME_CLASS_PREFIX+"animate-on-hover "+THEME_CLASS_PREFIX+"animate-on-active "+THEME_CLASS_PREFIX+"button-md\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\""+THEME_CLASS_PREFIX+"button-image\"> IMAGE </button>"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-radius": "28%"
        },
        classes: [
          THEME_CLASS_PREFIX + "button-rounded"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-radius": "50%"
        },
        classes: [
          THEME_CLASS_PREFIX + "button-circular"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // "border-radius": "5em" // can't use EM on computed values
        },
        classes: [
          THEME_CLASS_PREFIX + "button-pill"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "box-shadow": "none",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-flat"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
        },
        classes: [
          THEME_CLASS_PREFIX + "button-plain"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "box-shadow": "none",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-plain",
          THEME_CLASS_PREFIX + "button-flat"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "box-shadow": "rgba(0, 255, 0, 0.2) 0px 5px 5px -3px, rgba(0, 255, 0, 0.14) 0px 8px 10px 1px, rgba(0, 255, 0, 0.12) 0px 3px 14px 2px",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-elevated"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          "border": "2px solid rgb(0, 188, 212)",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-outlined"
        ],
      },
    ])
  );

  it('Check SIZES button characteristics', async (browser: NightwatchBrowser) => {
    await nightwatchCheckRules(browser, '#test-sizes .'+THEME_CLASS_PREFIX+'simple-button', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      0: {
        height: 24,
        width: 80,
        html: [
          "EXTRA SMALL"
        ],
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      4: {
        height: 76,
        width: 325,
        html: [
          "EXTRA LARGE"
        ],
      },
    })
    await nightwatchCheckRules(browser, '#test-size-icons .'+THEME_CLASS_PREFIX+'simple-button', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      0: {
        height: 20,
        width: 20,
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      4: {
        height: 60,
        width: 60,
      },
    });
  });

  it('Check ICONS button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-icons .'+THEME_CLASS_PREFIX+'simple-button', [
      {
        height: 33,
        width: 33,
        css:{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
        },
      },
      {
        height: 33,
        width: 33,
        css:{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
        },
      },
      {
        height: 33,
        width: 33,
        attributes: [
          "disabled"
        ],
        css:{
          "opacity": "0.25",
        },
      },
      {
        height: 33,
        width: 33,
        html: [
          "<button class=\""+THEME_CLASS_PREFIX+"simple-button "+THEME_CLASS_PREFIX+"animate-on-hover "+THEME_CLASS_PREFIX+"animate-on-active "+THEME_CLASS_PREFIX+"button-md "+THEME_CLASS_PREFIX+"button-icon-only\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\""+THEME_CLASS_PREFIX+"button-image\"></button>"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-radius": "28%"
        },
        classes: [
          THEME_CLASS_PREFIX + "button-rounded"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-radius": "50%"
        },
        classes: [
          THEME_CLASS_PREFIX + "button-circular"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-radius": "28%"
        },
        html: [
          "<button class=\""+THEME_CLASS_PREFIX+"simple-button "+THEME_CLASS_PREFIX+"animate-on-hover "+THEME_CLASS_PREFIX+"animate-on-active "+THEME_CLASS_PREFIX+"button-rounded "+THEME_CLASS_PREFIX+"button-md "+THEME_CLASS_PREFIX+"button-icon-only\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\""+THEME_CLASS_PREFIX+"button-image\"></button>"
        ],
        classes: [
          THEME_CLASS_PREFIX + "button-rounded"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-radius": "50%"
        },
        html: [
          "<button class=\""+THEME_CLASS_PREFIX+"simple-button "+THEME_CLASS_PREFIX+"animate-on-hover "+THEME_CLASS_PREFIX+"animate-on-active "+THEME_CLASS_PREFIX+"button-circular "+THEME_CLASS_PREFIX+"button-md "+THEME_CLASS_PREFIX+"button-icon-only\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\""+THEME_CLASS_PREFIX+"button-image\"></button>"
        ],
        classes: [
          THEME_CLASS_PREFIX + "button-circular"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // "border-radius": "5em" // can't use EM on computed values
        },
        classes: [
          THEME_CLASS_PREFIX + "button-pill"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "box-shadow": "none",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-flat"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
        },
        classes: [
          THEME_CLASS_PREFIX + "button-plain"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "box-shadow": "none",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-plain",
          THEME_CLASS_PREFIX + "button-flat"
        ],
      },
      {
        height: 33,
        width: 33,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "box-shadow": "rgba(0, 255, 0, 0.2) 0px 5px 5px -3px, rgba(0, 255, 0, 0.14) 0px 8px 10px 1px, rgba(0, 255, 0, 0.12) 0px 3px 14px 2px",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-elevated"
        ],
      },
      {
        height: 37,
        width: 37,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          "border": "2px solid rgb(0, 188, 212)",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-outlined"
        ],
      },
    ])
  );

  it('Check MULTIPLE button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-multiples .'+THEME_CLASS_PREFIX+'simple-button', [
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-color": "rgb(0, 188, 212)",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-outlined",
          THEME_CLASS_PREFIX + "button-pill",
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-radius": "50%",
          "opacity": "0.25",
        },
        attributes: [
          "disabled"
        ],
        classes: [
          THEME_CLASS_PREFIX + "button-flat",
          THEME_CLASS_PREFIX + "button-circular",
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-icon-only",
          THEME_CLASS_PREFIX + "button-pill",
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-color": "rgb(0, 188, 212)",
        },
        classes: [
          THEME_CLASS_PREFIX + "button-icon-only",
          THEME_CLASS_PREFIX + "button-outlined",
        ],
      },
    ])
  );

  it('Check SOCIALS button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-socials .'+THEME_CLASS_PREFIX+'simple-button', [
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(59, 89, 152, 1)" // #3b5998 is computed like this
        },
        classes: [
          "brand-facebook-bg",
          "core-white-text",
        ],
        html: [
          "DEFAULT"
        ],
      },
      {
        attributes: [
          "disabled"
        ],
        classes: [
          "brand-facebook-bg",
          "core-white-text",
        ],
        css:{
          "opacity": "0.25",
        },
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
        },
        classes: [
          "brand-facebook-text",
          THEME_CLASS_PREFIX + "button-plain"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          "border": "2px solid rgb(59, 89, 152)" // #3b5998 is computed like this
        },
        classes: [
          THEME_CLASS_PREFIX + "button-outlined",
          "brand-facebook-text",
          "brand-facebook-border",
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(59, 89, 152, 1)" // #3b5998 is computed like this
        },
        classes: [
          "brand-facebook-bg",
          "core-white-text",
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          "border": "2px solid rgb(59, 89, 152)" // #3b5998 is computed like this
        },
        classes: [
          THEME_CLASS_PREFIX + "button-outlined",
          "brand-facebook-text",
          "brand-facebook-border",
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          "border": "2px solid rgb(59, 89, 152)" // #3b5998 is computed like this
        },
        classes: [
          THEME_CLASS_PREFIX + "button-outlined",
          "facebook-pseudo-bg",
          "brand-facebook-border",
          "highlight-rollup-horizontal",
          "highlight-rollup-reverse"
        ],
        html: [
          "Outlined + Hover BG"
        ]
      },
    ])
  );

  /**
   * Close page
   */
  after(function (browser: NightwatchBrowser) {
    browser.end();
  });
});
