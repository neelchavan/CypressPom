Feature: End to end purchasing scenario for a product

    Placing order

    Scenario: e2e journey of purchasing the product
    Given when user lands on green cart home page
    When user adds Brocolli product to the cart
    Then verify weather the product added to the cart is correct
    Then user proceeds to checkout in checkout page
    Then user selects the country and places the order and verify the thank you message