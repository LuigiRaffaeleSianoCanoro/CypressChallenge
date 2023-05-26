# Cruise Bound Challenge

This project contains automated tests for the Cruise Bound website's Happy Path Sailing flow. The tests are implemented using Cypress.

## Getting Started

To execute the tests, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running the command: `npm install`.
3. Run the tests by executing: `npm run startTest`.

## Test Procedure

The tests simulate the following user actions:

1. Navigate to the Cruisebound Happy Path Sailing page.
2. Click on the "Select a cabin" button.
3. Select the "State of Residence" option.
   - Note: This selection will autofill the "State" value in the guest information form later in the funnel.
4. Click on the "Continue" button.
5. On the "Interior Upper/Lower" Cabin Type card, click on "Select".
6. On the "#7300" Cabin card, click on "Select and Continue".
7. On the "Review your selection" page, click on "Hold for Free".
8. Fill in the guest information form for the first guest and click on "Save and continue to next guest".
9. Fill in the guest information form for the second guest and click on "Save and continue to confirm free hold".
10. Select the "Hold cabin" payment option.
11. Click on "Place Hold".
12. Verify that the "Hold Confirmation Page" is displayed by asserting that the page contains the text "Your cabin is held".

## Cypress Cloud

To view all the test runs, you can visit the following link: [Cypress Cloud Test Runs](https://cloud.cypress.io/projects/kgf6ie)
