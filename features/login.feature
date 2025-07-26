Feature: Login

  Scenario: Valid user login
    Given I am on the landing page
    When I click on the login link
    And I enter the phone number "6303481147"
    And I enter the password "Madhu87812345678@"
    And I click on the continue button
    Then I should see the homepage
