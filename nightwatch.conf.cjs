//
// Refer to the online docs for more details:
// https://nightwatchjs.org/guide/configuration/nightwatch-configuration-file.html
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

require('dotenv').config();

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [
    "./tests/e2e/*.ts",
  ],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: ['@nightwatch/vue'],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals
  globals_path: '',

  vite_dev_server: {
    start_vite: true,
    port: process.env.VUE_APP_BASE_PORT || 8080
  },

  webdriver: {},

  test_workers: {
    enabled: true,
    workers: 'auto',
  },


  // test_settings: {
  //   default: {
  //     launch_url: process.env.NIGHTWATCH_URL + process.env.NIGHTWATCH_CHROME_PORT,
  //     globals: {
  //       abortOnAssertionFailure: false
  //     },
  //     desiredCapabilities: {
  //       browserName: "chrome",
  //       'goog:chromeOptions': {
  //         args: []
  //       },
  //       acceptInsecureCerts: true
  //     }
  //   },
  // },

  test_settings: {

    default: {

      globals: {
        abortOnAssertionFailure: false
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          "--log",
          "debug",
          '-vv'  // very verbose geckodriver logs
        ]
      },
    },

    chrome: {
      launch_url: process.env.NIGHTWATCH_URL + process.env.NIGHTWATCH_CHROME_PORT,

      desiredCapabilities: {
        browserName: 'chrome',

        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--headless'
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
          ]
        }
      },

      webdriver: {
        server_path: require('chromedriver').path,
        port: process.env.NIGHTWATCH_CHROME_PORT,
      },
    },

    chromeHeadless: {
      launch_url: process.env.NIGHTWATCH_URL + process.env.NIGHTWATCH_CHROME_PORT,

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            '--headless'
          ]
        }
      },

      webdriver: {
        server_path: require('chromedriver').path,
        port: process.env.NIGHTWATCH_CHROME_PORT,
      },
    },

    firefox: {
      launch_url: process.env.NIGHTWATCH_URL + process.env.NIGHTWATCH_FIREFOX_PORT,

      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: [
            // '-headless', // Uncomment for headless mode
            // '-verbose'
          ]
        }
      },

      webdriver: {
        port: process.env.NIGHTWATCH_FIREFOX_PORT,
        server_path: require('geckodriver').path,
      }
    },

    firefoxHeadless: {
      launch_url: process.env.NIGHTWATCH_URL + process.env.NIGHTWATCH_FIREFOX_PORT,

      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              '-headless',
            ]
          }
        }
      },

      webdriver: {
        port: process.env.NIGHTWATCH_FIREFOX_PORT,
        server_path: require('geckodriver').path,
      }
    },

    edge: {
      launch_url: process.env.NIGHTWATCH_URL + process.env.NIGHTWATCH_EDGE_PORT,

      desiredCapabilities: {
        browserName: 'MicrosoftEdge',

        'ms:edgeOptions': {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },

      webdriver: {
        port: process.env.NIGHTWATCH_EDGE_PORT,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        // server_path: '',
      }
    },

    // safari: {
    //   launch_url: process.env.NIGHTWATCH_URL + process.env.NIGHTWATCH_SAFARI_PORT,
    //
    //   desiredCapabilities: {
    //     browserName: 'safari',
    //     alwaysMatch: {
    //       acceptInsecureCerts: false
    //     }
    //   },
    //
    //   webdriver: {
    //     port: process.env.NIGHTWATCH_SAFARI_PORT,
    //     start_process: true,
    //     server_path: ''
    //   }
    // }
  },
}
