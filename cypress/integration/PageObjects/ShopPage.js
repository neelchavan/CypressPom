class ShopPage {
  getCheckoutButton() {
    return cy.contains("Checkout");
  }

  getTotalCostText() {
    let text;
    cy.get("h3 strong").then((el) => {
      text = el.text();
      cy.log(text);
      return text;
    });
  }
}

export default ShopPage;
