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

Given("A Browser is open on Cruisebound homepage", () => {
    cy.visit("https://frontend.cruisebound-qa.com/sailing?id=1")
    cy.log('Homepage loads')
})

When("the user clicks on Select a Cabin button", () => {
    Homepage.clickOnSelectCabinButton()
})

When("the user selects {string} for State of Residence and clicks on Continue", (state) => {
    WhosTravellingPage.clickOnDropDownMenuAndSelectOption(state)
    WhosTravellingPage.clickOnContinueButton()
})

When("the user selects Interior UpperLower Cabin Type", () => {
    SelectACabinTypePage.clickOnSelectACabinTypeButton()
})

When("the user selects and continue with #7300 Cabin card", () => {
    SelectYourCabinPage.clickOnSelectAndContinueButton()
})

When("the user clicks on Hold for free button", () => {
    ReviewYourSelectionPage.clickOnHoldForFreeButton()
})

When("the user fills the first guest form data", () => {
    HoldForFreePage.typeOnFirstName(RandomString.passengerName())
    HoldForFreePage.typeOnLastName(RandomString.passengerName())
    HoldForFreePage.typeOnDay('05')
    HoldForFreePage.typeOnYear('1994')
    HoldForFreePage.typeOnAddress('Alem')
    HoldForFreePage.typeOnCity('Mar del Plata')
    HoldForFreePage.typeOnPostCode('90210')
    HoldForFreePage.typeOnEmailAddress('test@test.com')
    HoldForFreePage.typeOnPhoneNumber('2236190977')
    HoldForFreePage.selectMonth('May')
    HoldForFreePage.selectCitizenship('Brazil')
    HoldForFreePage.selectGender('Male')
    HoldForFreePage.saveAndContinue()
})

When("the user fills the second guest form data", () => {
    HoldForFreePage.typeOnFirstName(RandomString.passengerName())
    HoldForFreePage.typeOnLastName(RandomString.passengerName())
    HoldForFreePage.typeOnDay('05')
    HoldForFreePage.typeOnYear('1994')
    HoldForFreePage.selectMonth('May')
    HoldForFreePage.selectCitizenship('Brazil')
    HoldForFreePage.selectGender('Male')
    HoldForFreePage.saveAndContinue()
})

When("the user selects Hold cabin payment option", () => {
    CheckoutPage.placeHold()
})

Then("the confirmation message text is visible", () => {
    ConfirmationPage.getConfirmationMessage().should('be.visible')
})

Then("the confirmation message text contains {string}", (expectedText) => {
    ConfirmationPage.getConfirmationMessage().should('have.text', expectedText)
})

