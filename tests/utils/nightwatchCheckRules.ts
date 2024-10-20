import { NightwatchBrowser } from 'nightwatch';


export interface INightwatchCheckRules {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  attributes?: string[];
  css?: Record<string, string>;
  classes?: string[];
  styles?: string[];
  tagName?: string;
  html?: string[];
}

/* EXAMPLE?
try {
  browser.assert.attributeContains('.simple-button', 'class', 'button-rounded');
} catch (error) {
  browser.assert.fail("Failed to check button-rounded class: " + error.message);
}
 */

// TODO solution lazyload ideas
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
 *
 * @param browser - The Nightwatch browser instance.
 * @param selector - The selector for the elements to check.
 * @param ruleArray - Array of rules to check.
 */
export default async function(
  browser: NightwatchBrowser,
  selector: string,
  ruleArray: INightwatchCheckRules[] | Record<number, INightwatchCheckRules>
) {
  return browser
    .waitForElementVisible(selector, 2000)
    .element
    .findAll(selector)
    .then((items) => {
      const promiseArray: PromiseLike<unknown>[] = [];

      /**
       * Each result is paired with the rules that have to be checked
       */
      for (let i = 0; i < items.length; i++) {
        if(!ruleArray[i])
          continue;

        const itemElement = element(items[i]);

        // TODO SOLVE LAZYLOAD PROBLEM
        // if(ruleArray[i].height || ruleArray[i].width || ruleArray[i].x || ruleArray[i].y)
        //   promiseArray.push(
        //     itemElement
        //       .getRect()
        //       // scroll down in case of lazyload or other triggers
        //       .then(({ x, y }) =>
        //         browser.moveTo(null, Math.ceil(x), Math.ceil(y))
        //           .pause(1000)
        //       )
        //       // actual check
        //       .then(() =>
        //         itemElement
        //           .getRect()
        //           .then(({ height, width, x, y }) => {
        //             if(ruleArray[i].height)
        //               browser.assert.equal(height, ruleArray[i].height, i + ": Correct size: height");
        //             if(ruleArray[i].width)
        //               browser.assert.equal(width, ruleArray[i].width, i + ": Correct size: width");
        //             if(ruleArray[i].x)
        //               browser.assert.equal(x, ruleArray[i].x, i + ": Correct position: x");
        //             if(ruleArray[i].y)
        //               browser.assert.equal(y, ruleArray[i].y, i + ": Correct position: y");
        //           })
        //       )
        //   )

        /**
         * size and position
         */
        if(ruleArray[i].height || ruleArray[i].width || ruleArray[i].x || ruleArray[i].y)
          itemElement
            .getRect()
            .then(({ height, width, x, y }) => {
              if(ruleArray[i].height)
                browser.assert.equal(height, ruleArray[i].height, i + ": Correct size: height");
              if(ruleArray[i].width)
                browser.assert.equal(width, ruleArray[i].width, i + ": Correct size: width");
              if(ruleArray[i].x)
                browser.assert.equal(x, ruleArray[i].x, i + ": Correct position: x");
              if(ruleArray[i].y)
                browser.assert.equal(y, ruleArray[i].y, i + ": Correct position: y");
            })

        /**
         * Array of attributes. Check that the element has all of them
         */
        if (ruleArray[i].attributes && Array.isArray(ruleArray[i].attributes) && ruleArray[i].attributes!.length > 0)
          for(let k = ruleArray[i].attributes!.length; k--; )
            promiseArray.push(
              itemElement
                .getAttribute(ruleArray[i].attributes![k])
                .then((value) =>
                  browser.assert.ok(value !== null, i + ": Attribute " + ruleArray[i].attributes![k] + " is present")
                )
            )

        /**
         * Dictionary of css instructions. Check if they are all true
         */
        if (Object.keys(ruleArray[i].css || {}).length > 0)
          for (const instruction in ruleArray[i].css)
            if (Object.prototype.hasOwnProperty.call(ruleArray[i].css, instruction))
              promiseArray.push(
                itemElement
                  .getCssValue(instruction)
                  .then((value) =>
                    browser.assert.equal(value, ruleArray[i].css![instruction], i + ": Correct css: " + instruction)
                  )
              )

        /**
         * Array of classes. Check that the element has all of them
         */
        if (ruleArray[i].classes && Array.isArray(ruleArray[i].classes) && ruleArray[i].classes!.length > 0)
          promiseArray.push(
            itemElement
              .getAttribute('class')
              .then((value) => {
                for(let k = ruleArray[i].classes!.length; k--; )
                  if(value && value.includes(ruleArray[i].classes![k] || ""))
                    browser.assert.ok(true, i + ": Correct class " + k);
                  else
                    browser.assert.fail((ruleArray[i].classes![k] || "") + " => class is not in => " + (value ?? ""));
              })
          )

        /**
         * Array of styles. Check that the element style include them all
         */
        if (ruleArray[i].styles && Array.isArray(ruleArray[i].styles) && ruleArray[i].styles!.length > 0)
          promiseArray.push(
            itemElement
              .getAttribute('style')
              .then((value) => {
                for(let k = ruleArray[i].styles!.length; k--; )
                  if(value && value.includes(ruleArray[i].styles![k] || ""))
                    browser.assert.ok(true, i + ": Correct style " + k);
                  else
                    browser.assert.fail((ruleArray[i].styles![k] || "") + " => style is not in => " + (value ?? ""));
              })
          )

        /**
         * Check tag name of element
         */
        if(ruleArray[i].tagName)
          promiseArray.push(
            itemElement
              .getTagName()
              .then((value) =>
                browser.assert.equal(value, ruleArray[i].tagName, i + ": Correct tagName")
              )
          )

        /**
         * Array of strings. Check that the element HTML include them all
         */
        if (ruleArray[i].html && Array.isArray(ruleArray[i].html) && ruleArray[i].html!.length > 0)
          promiseArray.push(
            itemElement
              .getAttribute('outerHTML')
              .then((value) => {
                for(let k = ruleArray[i].html!.length; k--; )
                  if(value && value.includes(ruleArray[i].html![k] || ""))
                    browser.assert.ok(true, i + ": Correct outerHTML " + k);
                  else
                    browser.assert.fail((ruleArray[i].html![k] || "") + " => HTML is not in => " + (value ?? ""));
              })
          )
      }
      
      return Promise.all(promiseArray)
    })
}
