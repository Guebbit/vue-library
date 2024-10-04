import { NightwatchBrowser } from 'nightwatch';
import nightwatchCheckRules from '../utils/nightwatchCheckRules';

describe('AspectRatio Component E2E Tests - based on the documentation, page /atoms/utilities/AspectRatio.html', function () {

  /**
   * Open page
   */
  before(function (browser: NightwatchBrowser, done: () => void) {
    return browser
      .url(process.env.VUE_APP_BASE_URL + '/atoms/utilities/AspectRatio.html')
      .waitForElementVisible('.aspect-ratio-container', 10000)
      .perform(() => done());
  });

  /**
   * Check all listed rules for every .aspect-ratio-container,
   * based on the index of the element
   */
  it('Check ALL padding-bottom, height, width, styles and content', async (browser : NightwatchBrowser) =>
    nightwatchCheckRules(browser, '.aspect-ratio-container', [
      {
        height: 664,
        width: 664,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "padding-bottom": "664px",
        },
        styles: [
          "--aspect-ratio: 100%;"
        ],
        content: "img",
      },
      {
        height: 374,
        width: 664,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "padding-bottom": "373.5px",
        },
        styles: [
          "--aspect-ratio: 56.25%;"
        ],
        content: "img",
      },
      {
        height: 498,
        width: 664,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "padding-bottom": "498px",
        },
        styles: [
          "--aspect-ratio: 75%;"
        ],
        content: "img",
      },
      {
        height: 374,
        width: 664,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "padding-bottom": "373.5px",
        },
        styles: [
          "--aspect-ratio: 56.25%;"
        ],
        content: "video",
      },
      {
        height: 374,
        width: 664,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "padding-bottom": "373.5px",
        },
        styles: [
          "--aspect-ratio: 56.25%;"
        ],
        content: "iframe",
      },
      {
        height: 374,
        width: 664,
        css: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "padding-bottom": "373.5px",
        },
        styles: [
          "--aspect-ratio: 56.25%;"
        ],
        content: "iframe",
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
