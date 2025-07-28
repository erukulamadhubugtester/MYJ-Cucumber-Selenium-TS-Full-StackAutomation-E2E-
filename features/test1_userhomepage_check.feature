Feature: Home Page Display Test

  Background:
    Given I am on the landing page
    When I click on the login link
    And I enter the phone number "<secure>"
    And I enter the password "<secure>"
    And I click on the continue button
    Then I should see the homepage or profile popup

  Scenario: Verify homepage UI elements
    Then I should see the homepage header text
    And highlight the homepage banner
