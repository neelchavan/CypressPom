import HomePage from "../PageObjects/HomePage";
import ShopPage from "../PageObjects/ShopPage";

describe("Shop page test", () => {
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
    // go to checkout page
    sp.getCheckoutButton().click();
    // verify if the products added to the cart are correct.
    cy.verifyIfProdctAddedToCartIsCorrect("iphone");
    cy.verifyIfProdctAddedToCartIsCorrect("Samsung");

    // verify if the products total is correct.
    var totalCost = 0;
    cy.get("table td:nth-child(4) strong")
      .each((el, index, list) => {
        totalCost = totalCost + Number(el.text().split(" ")[1]);
      })
      .then((el) => {
        cy.log(`Total cost is ${totalCost}`);
        cy.log(sp.getTotalCostText());
        //const displayedCost = sp.getTotalCostText();
        //cy.log(displayedCost);
        //expect(totalCost.toString()).to.equal(displayedCost.split(" ")[1]);
      });
  });
});
