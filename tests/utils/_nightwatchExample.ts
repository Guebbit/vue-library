/**
 * WARNING: EXAMPLE ONLY
 * Do not execute
 */
import { NightwatchBrowser } from 'nightwatch';
import nightwatchCheckRules from './nightwatchCheckRules';

describe('EXAMPLE (don\'t do) E2E Tests - based on the documentation, page /path/on/documentation.html', function () {

  /**
   * Open page
   */
  before(function (browser: NightwatchBrowser, done: () => void) {
    return browser
      .url(process.env.VUE_APP_BASE_URL + '/path/on/documentation.html')
      .waitForElementVisible('custom-css-selector', 10000)
      .perform(() => done());
  });

  /**
   * Utilities
   */
  browser
    .waitForElementVisible('body', 1000)
    .execute(function () {
      // WARNING: This happens in the browser context, not visible from the tests
      // (example: console.log() not happening)
    }, [], function(result) {
      // This happens in the node context (in the tests)
    })
    .pause(200)  // Optional: Pause to allow scrolling to finish
    .end()

  browser.document.source()
    .then((result) => {
      console.log('All page in a string', result);
    })

  /**
   *
   */
  it('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', async (browser : NightwatchBrowser) =>
    nightwatchCheckRules(browser, 'custom-css-selector', [
      {
        height: 664,
        width: 664,
        styles: ["--aspect-ratio: 100%;"],
      },
      {
        height: 374,
        width: 664,
        styles: ["--aspect-ratio: 56.25%;"],
      },
    ])
  );

  /**
   *
   */
  it('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', async (browser : NightwatchBrowser) =>
    nightwatchCheckRules(browser, '.dev-section > *', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      3: {
        height: 664,
        width: 664,
        styles: ["--aspect-ratio: 100%;"],
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      4: {
        height: 374,
        width: 664,
        styles: ["--aspect-ratio: 56.25%;"],
      },
    })
  );

  /**
   *
   */
  it('ccccccccccccccccccccccccccc', (browser: NightwatchBrowser) => {
    return browser
      .waitForElementVisible('custom-css-selector:nth-of-type(1)', 'Element is visible')
      .getElementSize("custom-css-selector:nth-of-type(1)", (result) => {
        const { height, width } = result.value as { height: number; width: number };
        browser.assert.equal(height, 664, "Correct property: height");
        browser.assert.equal(width, 664, "Correct property: width");
      })
      // .getCssProperty('custom-css-selector:nth-of-type(1)', 'padding-bottom', (result) =>
      //   browser.assert.equal(result.value, "664px", "Correct property: padding-bottom"))
      .assert.cssProperty('custom-css-selector:nth-of-type(1)', 'padding-bottom', '664px', 'Correct property: padding-bottom')
      .assert.attributeContains("custom-css-selector:nth-of-type(1)", "style", "--aspect-ratio: 100%", "Correct property: --aspect-ratio")
      .assert.elementPresent('custom-css-selector:nth-of-type(1) img', 'Correct content: img child')
  });

  /**
   * Close page
   */
  after(function (browser: NightwatchBrowser) {
    browser.end();
  });
});
