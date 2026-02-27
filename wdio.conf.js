export const config = {
  runner: 'local',

  specs: [
    './test/specs/**/*.js'
  ],

  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',

    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Pixel 5',
    'appium:platformVersion': '14',
    'appium:browserName': 'Chrome',

    'appium:chromedriverAutodownload': true
  }],

  services: [
    ['appium', {
      args: {
        relaxedSecurity: true
      }
    }]
  ],

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    timeout: 60000
  }
}