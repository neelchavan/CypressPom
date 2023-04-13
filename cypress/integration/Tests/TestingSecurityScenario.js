/// <reference types="Cypress" />
describe("Intercepting http req details to test security", () => {
  it("Security test", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    // by using below intercept method we are mocking the 'request'.
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", // actual request
      (req) => {
        // modifying the actual request in the below step
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=chavan";
        // receiving response from the modified request
        req.continue((res) => {
          // in the response of the modified request we are expecting status code as '404'
          expect(res.statusCode).to.equal(404);
        });
      }
    ).as("modifiedRequest");
    cy.get(".btn.btn-primary").click();
    cy.wait("@modifiedRequest");
  });
});
