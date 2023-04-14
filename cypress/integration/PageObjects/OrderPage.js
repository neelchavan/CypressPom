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

  getDownloadCsvButton() {
    return cy.contains("in CSV");
  }

  getDownloadExcelButton() {
    return cy.contains("in Excel");
  }
}
export default OrderPage;
