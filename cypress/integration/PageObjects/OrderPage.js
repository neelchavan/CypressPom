class OrderPage {
  getSelectCountryInput() {
    return cy.get("[placeholder*='Select']");
  }

  getSelectCountryOptions() {
    return cy.get("button span");
  }

  getPlaceOrderButton() {
    return cy.contains("Place Order ");
  }
}
export default OrderPage;
