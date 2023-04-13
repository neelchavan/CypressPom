/// <reference types="Cypress" />

describe("Mocking http request using cypress intercept", () => {
  it("intercepting the book request", () => {
    // open the web page.
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    // modify the get book api response to return only one book object.
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          { book_name: "RobotFramework", isbn: "982252", aisle: "324353" },
          // { book_name: "null", isbn: "SPY40", aisle: "2529857" },
          // { book_name: "null", isbn: "SPY40", aisle: "2529857" },
        ],
      }
    ).as("bookResponse");
    cy.get(".btn.btn-primary").click();
    // wait until mock request promise is resolved
    cy.wait("@bookResponse");

    // verify if only one book available message is displayed
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});
