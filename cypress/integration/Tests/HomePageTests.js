import HomePage from "../PageObjects/HomePage";

describe("Home page tests", () => {
  before(function () {
    cy.log("visisting website");
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Fill all the required fields and submit the form", () => {
    const hp = new HomePage();
    hp.getNameEditBox().type("Neel Chavan");
    hp.getEmailEditBox().type("neelchavan@gmail.com");
    hp.getPasswordEditBox().type("123456789");
    hp.getIceCreamCheckbox().click();
    hp.getSelectDropdown().select("Male");
    hp.getEmployedRadioButton().click();
    hp.getDatePicker().type("1999-06-26");
    hp.getSubmitButton().click();
    cy.log("Submitting form now");
    cy.get(".alert-success").should("be.visible");
  });
});
