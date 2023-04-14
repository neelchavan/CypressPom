/// <reference types="Cypress" />
describe("Jwt session", () => {
  it("testing login scenario through jwt tokens", () => {
    cy.loginApi().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: (window) => {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
  });
});
