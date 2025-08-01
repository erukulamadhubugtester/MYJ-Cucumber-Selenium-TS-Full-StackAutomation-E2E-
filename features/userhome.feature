Feature: User Homepage UI

  Background:
    Given I am logged in
    And profile popup is closed if shown

  Scenario: Verify message and all dropdown/input/button elements on homepage
    Then I should see the "Meet Your Matrimonial Soulmate" message
    And I should see the age range "18 - 27" in the dropdown
    And I should see the Education dropdown
    And I should see the profession input field
    And I should see the Find button
    Then I should see and highlight the "Profiles which match your preferences" title

