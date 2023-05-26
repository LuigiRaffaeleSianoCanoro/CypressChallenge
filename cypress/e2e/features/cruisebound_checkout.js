import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../../pages/Homepage";
import WhosTravellingPage from "../../pages/WhosTravellingPage";
import SelectACabinTypePage from "../../pages/SelectACabinTypePage";
import SelectYourCabinPage from "../../pages/SelectYourCabinPage";
import ReviewYourSelectionPage from "../../pages/ReviewYourSelectionPage";
import HoldForFreePage from "../../pages/HoldForFreePage";
import ConfirmationPage from "../../pages/ConfirmationPage";
import CheckoutPage from "../../pages/CheckoutPage";
import RandomString from "../../Utils/RandomString";

/**
 * Step definition for the given statement:
 * A Browser is open on Cruisebound homepage.
 * It visits the Cruisebound homepage and logs a message indicating the page has loaded.
 */
Given("A Browser is open on Cruisebound homepage", () => {
    cy.visit("https://frontend.cruisebound-qa.com/sailing?id=1")
    cy.log('Homepage loads')
});

/**
 * Step definition for the when statement:
 * the user clicks on Select a Cabin button.
 * It simulates the user clicking on the "Select a Cabin" button on the Homepage.
 */
When("the user clicks on Select a Cabin button", () => {
    Homepage.clickOnSelectCabinButton();
});

/**
 * Step definition for the when statement:
 * the user selects {string} for State of Residence and clicks on Continue.
 * It simulates the user selecting a state of residence from the drop-down menu and clicking on "Continue".
 *
 * @param {string} state - The state of residence to select.
 */
When("the user selects {string} for State of Residence and clicks on Continue", (state) => {
    WhosTravellingPage.clickOnDropDownMenuAndSelectOption(state);
    WhosTravellingPage.clickOnContinueButton();
});

/**
 * Step definition for the when statement:
 * the user selects Interior UpperLower Cabin Type.
 * It simulates the user clicking on the "Select a Cabin Type" button on the SelectACabinTypePage.
 */
When("the user selects Interior UpperLower Cabin Type", () => {
    SelectACabinTypePage.clickOnSelectACabinTypeButton();
});

/**
 * Step definition for the when statement:
 * the user selects and continue with #7300 Cabin card.
 * It simulates the user selecting and continuing with the #7300 Cabin card on the SelectYourCabinPage.
 */
When("the user selects and continue with #7300 Cabin card", () => {
    SelectYourCabinPage.clickOnSelectAndContinueButton();
});

/**
 * Step definition for the when statement:
 * the user clicks on Hold for free button.
 * It simulates the user clicking on the "Hold for free" button on the ReviewYourSelectionPage.
 */
When("the user clicks on Hold for free button", () => {
    ReviewYourSelectionPage.clickOnHoldForFreeButton();
});

/**
 * Step definition for the when statement:
 * the user fills the first guest form data.
 * It simulates the user filling the first guest form data on the HoldForFreePage.
 */
When("the user fills the first guest form data", () => {
    HoldForFreePage.typeOnFirstName(RandomString.passengerName());
    HoldForFreePage.typeOnLastName(RandomString.passengerName());
    HoldForFreePage.typeOnDay('05');
    HoldForFreePage.typeOnYear('1994');
    HoldForFreePage.typeOnAddress('Alem');
    HoldForFreePage.typeOnCity('Mar del Plata');
    HoldForFreePage.typeOnPostCode('90210');
    HoldForFreePage.typeOnEmailAddress('test@test.com');
    HoldForFreePage.typeOnPhoneNumber('2236190977');
    HoldForFreePage.selectMonth('May');
    HoldForFreePage.selectCitizenship('Brazil');
    HoldForFreePage.selectGender('Male');
    HoldForFreePage.saveAndContinue();
});

/**
 * Step definition for the when statement:
 * the user fills the second guest form data.
 * It simulates the user filling the second guest form data on the HoldForFreePage.
 */
When("the user fills the second guest form data", () => {
    HoldForFreePage.typeOnFirstName(RandomString.passengerName());
    HoldForFreePage.typeOnLastName(RandomString.passengerName());
    HoldForFreePage.typeOnDay('05');
    HoldForFreePage.typeOnYear('1994');
    HoldForFreePage.selectMonth('May');
    HoldForFreePage.selectCitizenship('Brazil');
    HoldForFreePage.selectGender('Male');
    HoldForFreePage.saveAndContinue();
});

/**
 * Step definition for the when statement:
 * the user selects Hold cabin payment option.
 * It simulates the user selecting the "Hold cabin" payment option on the CheckoutPage.
 */
When("the user selects Hold cabin payment option", () => {
    CheckoutPage.placeHold();
});

/**
 * Step definition for the then statement:
 * the confirmation message text is visible.
 * It verifies that the confirmation message text is visible on the ConfirmationPage.
 */
Then("the confirmation message text is visible", () => {
    ConfirmationPage.getConfirmationMessage().should('be.visible');
});

/**
 * Step definition for the then statement:
 * the confirmation message text contains {string}.
 * It verifies that the confirmation message text on the ConfirmationPage contains the expected text.
 *
 * @param {string} expectedText - The expected text in the confirmation message.
 */
Then("the confirmation message text contains {string}", (expectedText) => {
    ConfirmationPage.getConfirmationMessage().should('have.text', expectedText);
});
