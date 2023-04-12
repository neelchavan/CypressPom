class ShopPage {
  getCheckoutButton() {
    return cy.contains("Checkout");
  }

  getTotalCost() {
    return cy.get("h3 strong");
  }

  getDeliveryLocationTextBox() {
    return cy.get("#country");
  }

  getCountryOption() {
    return cy.get(".suggestions ul li a");
  }

  getTermsAndPolicyCheckBox() {
    return cy.get("#checkbox2");
  }

  getPurchaseButton() {
    return cy.contains("Purchase");
  }

  getSuccessAlert() {
    return cy.get("strong");
  }
}

export default ShopPage;
