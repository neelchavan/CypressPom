class CartPage {
  getCheckoutButton() {
    return cy.contains("Checkout");
  }

  getProductTextOnCartPage() {
    return cy.get(".cartSection h3");
  }
}
export default CartPage;
