import HomePage from "../PageObjects/HomePage";
import ShopPage from "../PageObjects/ShopPage";

describe("Shop page test", () => {
  Cypress.config("defaultCommandTimeout", 8000);
  const hp = new HomePage();
  const sp = new ShopPage();

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  // it("Check when clicked on checkout button it should should redirect to checkout page", () => {
  //   // go to the shop page
  //   hp.getShopNavigationButton().click();
  //   // go to checkout page
  //   sp.getCheckoutButton().click();
  //   // verify if the checkout button is visible
  //   sp.getCheckoutButton().should("be.visible");
  // });

  // it("Add product to a cart by it's name", () => {
  //   // go to the shop page
  //   hp.getShopNavigationButton().click();
  //   // add 'nokia' and 'blackberry' product to the cart
  //   cy.addProductToCartByName("Nokia");
  //   cy.addProductToCartByName("Blackberry");
  // });

  it("E2E Scenario for purchasing the product", () => {
    // go to the shop page
    hp.getShopNavigationButton().click();
    // add 'Samsung' and 'iphone' products to the cart
    cy.addProductToCartByName("Samsung");
    cy.addProductToCartByName("iphone");
    cy.addProductToCartByName("Nokia");
    // go to checkout page
    sp.getCheckoutButton().click();
    // verify if the products added to the cart are correct.
    cy.verifyIfProdctAddedToCartIsCorrect("iphone");
    cy.verifyIfProdctAddedToCartIsCorrect("Samsung");
    cy.verifyIfProdctAddedToCartIsCorrect("Nokia");
    // verify if the products total is correct.
    cy.verifyIfTheProductsTotalIscorrect();
    // proceed to checkout
    sp.getCheckoutButton().click();
    // type the delivery location
    sp.getDeliveryLocationTextBox().type("India");
    // select the location from options
    sp.getCountryOption().click();
    // agree terms and policy
    sp.getTermsAndPolicyCheckBox().click({ force: true });
    // click on purchase button
    sp.getPurchaseButton().click();
    // verify if purchase was successful
    sp.getSuccessAlert().then((el) => {
      const text = el.text();
      expect(text).to.equal("Success!");
    });
  });
});
