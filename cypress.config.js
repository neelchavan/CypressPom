const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  screenshotOnRunFailure = true;
  require("cypress-mochawesome-reporter/plugin")(on); // for html reports
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // for html reports
  env: {
    baseUrl: "https://rahulshettyacademy.com/angularpractice/",
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/Tests/*.js",
    //: "cypress/integration/Tests/BDD/greenCart.feature",
    downloadsFolder: "cypress/downloads",
  },
});
