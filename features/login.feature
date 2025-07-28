Feature: Login Flow

  Scenario: Valid login with profile popup or homepage
    Given I am on the landing page
    When I click on the login link
    And I enter the phone number "<secure>"
    And I enter the password "<secure>"
    And I click on the continue button
    Then I should see the homepage or profile popup
