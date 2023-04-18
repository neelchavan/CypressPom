const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // for html reports
  env: {
    baseUrl: "https://rahulshettyacademy.com/angularpractice/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on); // for html reports
    },
    specPattern: "cypress/integration/Tests/*.js",
    downloadsFolder: "cypress/downloads",
  },
});
