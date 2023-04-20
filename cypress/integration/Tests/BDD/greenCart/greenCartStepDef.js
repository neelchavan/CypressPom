import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("when user lands on green cart home page", () => {
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  cy.log("given step is over");
});

When("user adds Brocolli product to the cart", () => {
  cy.get(".product h4").each((el, index, list) => {
    if (el.text().includes("Brocolli")) {
      cy.get(".product button").eq(index).click();
    }
  });
  cy.log("when step is over");
});

Then("verify weather the product added to the cart is correct", () => {
  cy.log("entered then step");
  // click on cart button
  cy.get(".cart-icon").click();
  // check for the product named Brocolli
  cy.get(".cart-items p[class='product-name']").then((el) => {
    if (el.text().includes("Brocolli")) {
      assert(true);
    } else {
      assert(false);
    }
  });
});

Then("user proceeds to checkout in checkout page", () => {
  // click on procced to checkout button
  cy.contains("PROCEED TO CHECKOUT").click();
  // click on place order button
  cy.contains("Place Order").click();
});

Then(
  "user selects the country and places the order and verify the thank you message",
  () => {
    // select the country
    cy.get("select").select("India").should("have.value", "India");
    // click on agree policy terms
    cy.get("input[type='checkbox']").click();
    // click on proceed
    cy.contains("Proceed").click();
    // verify thank you message
    cy.get("span").then((el) => {
      if (el.text().includes("your order has been placed")) {
        assert(true);
      }
    });
    //cy.log("hi then");
  }
);
