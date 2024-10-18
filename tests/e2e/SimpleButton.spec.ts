import { NightwatchBrowser } from 'nightwatch';
import nightwatchCheckRules from '../utils/nightwatchCheckRules'

describe('SimpleButton Component E2E Tests - based on the documentation, page /atoms/buttons/SimpleButton.html', function () {
  this.retries(3);

  /**
   * Open page
   */
  before(function (browser: NightwatchBrowser, done: () => void) {
    return browser
      .url(process.env.VUE_APP_BASE_URL + '/atoms/buttons/SimpleButton.html')
        .waitForElementVisible('.simple-button', 10000)
        // Add global theme for these tests
        .click('#themeCheckbox')
        // wait for them to be applied
        .pause(500)
        .perform(() => done());
  });

  it('Check REGULAR button characteristics', async (browser: NightwatchBrowser) =>
      nightwatchCheckRules(browser, '#test-basics .simple-button', [
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
            "<svg class=\"button-icon\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg> ",
            "DEFAULT"
          ],
        },
        {
          css: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "background-color": "rgba(0, 188, 212, 1)",
          },
          html: [
            "<svg class=\"button-icon\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg> ",
            "DEFAULT"
          ],
        },
      ])
  );

  it('Check REGULAR button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-regulars .simple-button', [
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
          "<button class=\"simple-button animate-on-hover animate-on-active button-md\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\"button-image\"> IMAGE </button>"
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
          "button-rounded"
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
          "button-circular"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // "border-radius": "5em" // can't use EM on computed values
        },
        classes: [
          "button-pill"
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
          "button-flat"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
        },
        classes: [
          "button-plain"
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
          "button-plain",
          "button-flat"
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
          "button-elevated"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          "border": "2px solid rgb(0, 188, 212)",
        },
        classes: [
          "button-outlined"
        ],
      },
    ])
  );

  it('Check SIZES button characteristics', async (browser: NightwatchBrowser) => {
    await nightwatchCheckRules(browser, '#test-sizes .simple-button', {
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
    await nightwatchCheckRules(browser, '#test-size-icons .simple-button', {
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
    nightwatchCheckRules(browser, '#test-icons .simple-button', [
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
          "<button class=\"simple-button animate-on-hover animate-on-active button-md button-icon-only\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\"button-image\"></button>"
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
          "button-rounded"
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
          "button-circular"
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
          "<button class=\"simple-button animate-on-hover animate-on-active button-md button-rounded button-icon-only\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\"button-image\"></button>"
        ],
        classes: [
          "button-rounded"
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
          "<button class=\"simple-button animate-on-hover animate-on-active button-md button-circular button-icon-only\"><img src=\"https://placedog.net/100/100\" alt=\"\" class=\"button-image\"></button>"
        ],
        classes: [
          "button-circular"
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
          "button-pill"
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
          "button-flat"
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
          "button-plain"
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
          "button-plain",
          "button-flat"
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
          "button-elevated"
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
          "button-outlined"
        ],
      },
    ])
  );

  it('Check MULTIPLE button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-multiples .simple-button', [
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-color": "rgb(0, 188, 212)",
        },
        classes: [
          "button-outlined",
          "button-pill",
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
          "button-flat",
          "button-circular",
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
        },
        classes: [
          "button-icon-only",
          "button-pill",
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
          "button-icon-only",
          "button-outlined",
        ],
      },
    ])
  );

  it('Check SOCIALS button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-socials .simple-button', [
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
          "button-plain"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
          "border": "2px solid rgb(59, 89, 152)" // #3b5998 is computed like this
        },
        classes: [
          "button-outlined",
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
          "button-outlined",
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
          "button-outlined",
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
