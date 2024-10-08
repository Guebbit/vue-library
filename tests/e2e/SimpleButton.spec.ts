import { NightwatchBrowser } from 'nightwatch';
import nightwatchCheckRules from '../utils/nightwatchCheckRules'

describe('SimpleButton Component E2E Tests - based on the documentation, page /atoms/buttons/SimpleButton.html', function () {
  // TODO this.retries(3);

  /**
   * Open page
   */
  before(function (browser: NightwatchBrowser, done: () => void) {
    return browser
      .url(process.env.VUE_APP_BASE_URL + '/atoms/buttons/SimpleButton.html')
      .waitForElementVisible('.simple-button', 10000)
      .perform(() => done());
  });

  it('Check REGULAR button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-regulars .simple-button', [
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
          "<img src=\"https://placedog.net/100/100\" alt=\"\" class=\"button-image\">"
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
        width: 76,
        html: [
          "EXTRA SMALL"
        ],
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      4: {
        height: 64,
        width: 313,
        html: [
          "EXTRA LARGE"
        ],
      },
    })
    await nightwatchCheckRules(browser, '#test-size-icons .simple-button', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      0: {
        height: 24,
        width: 24,
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      4: {
        height: 72,
        width: 72,
      },
    });
  });

  it('Check ICONS button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-icons .simple-button', [
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
        },
      },
      {
        attributes: [
          "disabled"
        ],
        css:{
          "opacity": "0.25",
        },
      },
      {
        html: [
          "<img src=\"https://placedog.net/100/100\" alt=\"\" class=\"button-image\">"
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
        html: [
          "<img src=\"https://placedog.net/100/100\" alt=\"\" class=\"button-image\">"
        ],
      },
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 0, 0, 0)",  // transparent is computed like this
        },
        classes: [
          "button-outlined"
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

  it('Check SLOTS button characteristics', async (browser: NightwatchBrowser) =>
    nightwatchCheckRules(browser, '#test-slots .simple-button', [
      {
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "background-color": "rgba(0, 188, 212, 1)",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "border-color": "rgb(0, 188, 212)",
        },
        classes: [
          "simple-button",
          "animate-on-hover",
          "animate-on-active",
        ],
        html: [
          "<img src=\"https://placedog.net/100/100\" alt=\"Image\" class=\"button-image\">",
          "IMAGE"
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
