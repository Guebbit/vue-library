import { NightwatchBrowser } from 'nightwatch';
import nightwatchCheckRules from '../utils/nightwatchCheckRules';

describe('Media Component E2E Tests - based on the documentation, page /atoms/utilities/Media.html', function () {

  /**
   * Open page
   */
  before((browser: NightwatchBrowser, done: () => void) =>
    browser
      .url(process.env.VUE_APP_BASE_URL + '/atoms/utilities/Media.html')
      .waitForElementVisible('.dev-section > *', 10000)
      .perform(() => done())
  );


  // promiseArray.push(
  //   itemElement
  //     .getRect()
  //     .then(({ x, y }) => {
  //       console.log("AAAA", x, y)
  //       return browser.moveTo(null, x, y);
  //     })
  // )

  // browser
  //   .waitForElementVisible('body', 1000)
  //   .execute(function () {
  //     // WARNING: This happens in the browser context, not visible from the tests
  //     // (example: console.log() not happening)
  //   }, [], function(result) {
  //     // This happens in the node context (in the tests)
  //   })
  //   .pause(200)  // Optional: Pause to allow scrolling to finish
  //   .end()



  /**
   * Check all listed rules for every .aspect-ratio-container,
   * based on the index of the element
   */
  it('Check ALL padding-bottom, height, width, styles and content', async (browser : NightwatchBrowser) =>
    nightwatchCheckRules(browser, '.dev-section > *', [
      {
        height: 200,
        width: 200,
        tagName: "img",
        html: [
          "http://placedog.net/800/800",
          "alt=\"alt text\" title=\"title text\""
        ],
      },
      {
        height: 400,
        width: 400,
        tagName: "img",
      },
      {
        height: 200,
        width: 200,
        tagName: "div",
      },
      {
        height: 200,
        width: 200,
        tagName: "div",
      },
      {
        height: 200,
        width: 400,
        tagName: "div",
        styles: [
          "background-image: url(\"http://placedog.net/400/400\");",
          "background-repeat: no-repeat; background-position: center center; background-size: cover;"
        ],
      },
      {
        // TODO POSTER \ LAZYLOAD
        // height: 373.5,
        // width: 664,
        tagName: "video",
      },
      {
        height: 200,
        width: 400,
        tagName: "div", // iframe container
      },
      {
        height: 200,
        width: 400,
        tagName: "div", // iframe container
      },
      {
        // TODO LAZYLOAD
        // height: 600,
        // width: 400,
        tagName: "img", // 8 - null??
      },
      {
        // TODO LAZYLOAD
        // height: 200,
        // width: 400,
        tagName: "div",
      },
      {
        // TODO LAZYLOAD
        // height: 373.5,
        // width: 664,
        tagName: "video",
      },
      {
        // TODO LAZYLOAD
        // height: 196,
        // width: 396,
        tagName: "div", // iframe container
      },
      {
        // TODO LAZYLOAD
        // height: 400,
        // width: 400,
        tagName: "img",
      },
    ])
  )

  /**
   * Close page
   */
  after(function (browser: NightwatchBrowser) {
    browser.end();
  });
});
