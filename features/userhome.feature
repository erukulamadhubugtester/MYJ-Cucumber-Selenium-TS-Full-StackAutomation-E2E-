Feature: User Homepage UI

  Scenario: Verify modules on homepage after login
    Given I am logged in
    And profile popup is closed if shown
    Then I should see the "Find the perfect connection for you" message
