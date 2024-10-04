import { NightwatchBrowser } from 'nightwatch';


export interface INightwatchCheckRules {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  css?: Record<string, string>; 
  styles?: string[];
  tagName?: string;
  content?: string;
  html?: string[];
}

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

    // browser.document.source()
    //   .then((result) => {
    //     console.log('All page in a string', result);
    //   })

    // browser
    //   .element
    //   .findAll(selector)
    //   .then((results) =>
    //     results.forEach((item, index) => {
    //       console.log("Rule", index, {...ruleArray[index]});
    //       const itemElement = element(item);
    //       itemElement.getRect()
    //         .then(({ height, width, x, y }) => {
    //           console.log("getRect", { height, width, x, y })
    //         })
    //       itemElement
    //         .getAttribute('style')
    //         .then((value) =>
    //           console.log("getAttribute style", value)
    //         )
    //       itemElement
    //         .getCssValue('padding-bottom')
    //         .then((value) =>
    //           console.log("getCssValue padding-bottom", value)
    //         )
    //       itemElement
    //         .getTagName()
    //         .then((value) =>
    //           console.log("getTagName", value)
    //         )
    //     })
    //   );

  return browser
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

        /**
         * size and position
         */
        if(ruleArray[i].height || ruleArray[i].width || ruleArray[i].x || ruleArray[i].y)
          // promiseArray.push(
          //   itemElement
          //     .getRect()
          //     // scroll down in case of lazyload or other triggers
          //     .then(({ x, y }) =>
          //       browser.moveTo(null, Math.ceil(x), Math.ceil(y))
          //         .pause(1000)
          //     )
          //     // actual check
          //     .then(() =>
          //       itemElement
          //         .getRect()
          //         .then(({ height, width, x, y }) => {
          //           if(ruleArray[i].height)
          //             browser.assert.equal(height, ruleArray[i].height, i + ": Correct size: height");
          //           if(ruleArray[i].width)
          //             browser.assert.equal(width, ruleArray[i].width, i + ": Correct size: width");
          //           if(ruleArray[i].x)
          //             browser.assert.equal(x, ruleArray[i].x, i + ": Correct position: x");
          //           if(ruleArray[i].y)
          //             browser.assert.equal(y, ruleArray[i].y, i + ": Correct position: y");
          //         })
          //     )
          // ) // TODO SOLVE LAZYLOAD PROBLEM
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
         * Array of styles. Check that the element style include them all
         */
        if (ruleArray[i].styles && Array.isArray(ruleArray[i].styles) && ruleArray[i].styles!.length > 0)
          promiseArray.push(
            itemElement
              .getAttribute('style')
              .then((value) => {
                for(let k = ruleArray[i].styles!.length; k--; )
                  browser.assert.ok((value ?? "").includes(ruleArray[i].styles![k] || ""), i + ": Correct style " + k);
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
         * Check tag name of first child
         * TODO do better?
         */
        if(ruleArray[i].content)
          promiseArray.push(
            itemElement.findElement(ruleArray[i].content!)
              .then((childElement) => childElement.getTagName())
              .then((value) =>
                browser.assert.equal(value, ruleArray[i].content, i + ": Correct content")
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
                  browser.assert.ok((value ?? "").includes(ruleArray[i].html![k] || ""), i + ": Correct outerHTML " + k);
              })
          )
      }
      
      return Promise.all(promiseArray)
    })
}