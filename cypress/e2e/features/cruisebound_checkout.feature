Feature: Cruisebound hold for free 

    The customer is able to hold for free a cabin

Background:
    Given A Browser is open on Cruisebound homepage

Scenario: Hold for free cabin happy path
    When the user clicks on Select a Cabin button
    And the user selects 'Alabama' for State of Residence
    And the user clicks on Continue button
    And the user selects Interior Upper/Lower Cabin Type
    And the user clicks on Select button
    And the user selects and conitnue with #7300 Cabin card
    And the user clicks on Hold for free button
    And the user fills the first guest form data
    And the user fills the second guest form data
    And the user selects Hold cabin payment option
    And the user clicks on Place hold button
    Then the confirmation message text is visible
    Then the confirmation message text contains 'Your cabin is held'


