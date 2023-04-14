// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import ShopPage from "../integration/PageObjects/ShopPage";

// Based on product name the function should be able to add the product to the cart
Cypress.Commands.add("addProductToCartByName", (nameOfProduct) => {
  cy.get("app-card h4 a").each((el, index, list) => {
    let name = el.text();
    cy.log(`names ${name}`);
    if (name.includes(nameOfProduct)) {
      //cy.log(`index is ${index}`);
      cy.get(".btn.btn-info").eq(index).click();
    }
  });
});

// verify if the products added to the cart are correct.
Cypress.Commands.add("verifyIfProdctAddedToCartIsCorrect", (nameOfProduct) => {
  cy.get("h4 a").then((el) => {
    const name = el.text();
    assert.isTrue(name.includes(nameOfProduct));
  });
});

// verify if the products total is correct.
let totalCost = 0;
Cypress.Commands.add("verifyIfTheProductsTotalIscorrect", () => {
  const sp = new ShopPage();
  cy.get("table td:nth-child(4) strong")
    .each((el, index, list) => {
      totalCost = totalCost + Number(el.text().split(" ")[1]);
    })
    .then((el) => {
      cy.log(`Total cost is ${totalCost}`);
      sp.getTotalCost().then((el) => {
        const displayedCost = el.text().split(" ")[1];
        expect(totalCost.toString()).to.equal(displayedCost);
      });
    });
});

// automating login scenario
Cypress.Commands.add("loginApi", () => {
  cy.request("POSt", "https://rahulshettyacademy.com/api/ecom/auth/login", {
    userEmail: "neelchavan418@gmail.com",
    userPassword: "Engineer1000!",
  }).then((res) => {
    expect(res.status).to.eq(200);
    Cypress.env("token", res.body.token);
  });
});
