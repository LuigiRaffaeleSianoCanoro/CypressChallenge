# Cruise Bound Challenge
To execute the test, run the following command in the console:

`npm run startTest`
## Test procedure
1. Navigate to the Cruisebound Happy Path Sailing page.
2. Click “Select a cabin”.
3. Select “State of Residence”.
a. Note: This selection will autofill the "State" value in the guest information form later in the funnel.
4. Click “Continue”.
5. On the “Interior Upper/Lower” Cabin Type card, click “Select”.
6. On the “#7300” Cabin card, click “Select and Continue”.
7. On the “Review your selection” page, click “Hold for Free”.
8. Fill in the guest information form for the first guest and click “Save and continue to next
guest”.
9. Fill in the guest information form for the second guest and click “Save and continue to
confirm free hold”.
10. Select the “Hold cabin” payment option.
11. Click “Place Hold”.
12. You should be directed to the “Hold Confirmation Page”, confirm this by asserting that
the page contains the text “Your cabin is held”.

## Cypress Cloud
To see all the tests run enter the following link:
https://cloud.cypress.io/projects/kgf6ie/runs