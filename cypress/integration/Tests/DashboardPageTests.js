/// <reference types="Cypress" />

import DashboardPage from "../PageObjects/DashboardPage";
import CartPage from "../PageObjects/CartPage";
import OrderPage from "../PageObjects/OrderPage";

describe("E2E scenario for purchasing the product", () => {
  const dp = new DashboardPage();
  const cp = new CartPage();
  const op = new OrderPage();
  it("Purchasing the product", () => {
    // login to the dashboard
    cy.loginApi().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: (window) => {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    // add iphone to the cart
    dp.getAddToCartButtonForIphone().click();
    // go to cart
    dp.getCartButton().click();
    // verify if the iphone is added to the cart correctly
    cp.getProductTextOnCartPage().then((el) => {
      expect(el.text()).to.equal("iphone 13 pro");
    });
    // proceed to checkout page
    cp.getCheckoutButton().click();
    // on order page select the country and place the order
    op.getSelectCountryInput().type("India");
    op.getSelectCountryOptions().each((el, index, list) => {
      if (el.text().endsWith("dia")) {
        cy.wrap(el).click();
      }
    });
    op.getPlaceOrderButton().click();
    cy.wait(3000);
    // Download csv and excel files
    op.getDownloadCsvButton().click();
    op.getDownloadExcelButton().click();
  });
});
