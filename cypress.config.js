const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "http://austin-web-react.s3-website.ap-south-1.amazonaws.com", // Set base URL
    defaultCommandTimeout: 10000, // Increase timeout if needed
    video: false, // Disable video recording (optional)
    retries: 2 // Retry failed tests up to 2 times
  }
});
