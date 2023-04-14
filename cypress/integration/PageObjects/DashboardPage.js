class DashboardPage {
  getAddToCartButtonForIphone() {
    return cy.get(".card-body button:nth-last-child(1)").eq(2);
  }

  getCartButton() {
    return cy.get(":nth-child(4) > .btn");
  }
}
export default DashboardPage;
