const CheckoutPage = require("../pages/CheckoutPage");
const ConfirmationPage = require("../pages/ConfirmationPage");
const HoldForFreePage = require("../pages/HoldForFreePage");
const Homepage = require("../pages/Homepage");
const ReviewYourSelectionPage = require("../pages/ReviewYourSelectionPage");
const SelectACabinTypePage = require("../pages/SelectACabinTypePage");
const SelectYourCabinPage = require("../pages/SelectYourCabinPage");
const WhosTravellingPage = require("../pages/WhosTravellingPage");

describe('CruiseBound', () => {
it('Hold for Free', () => {
  cy.visit('https://frontend.cruisebound-qa.com/sailing?id=1')
  Homepage.clickOnSelectCabinButton();


  WhosTravellingPage.clickOnDropDownMenuAndSelectOption('Alabama')
  WhosTravellingPage.clickOnContinueButton();

  SelectACabinTypePage.clickOnSelectACabinTypeButton();

  SelectYourCabinPage.clickOnSelectAndContinueButton();
  
  ReviewYourSelectionPage.clickOnHoldForFreeButton();


  HoldForFreePage.typeOnFirstName('Tyler');
  HoldForFreePage.typeOnLastName('Durdeen');  
  HoldForFreePage.typeOnDay('05');  
  HoldForFreePage.typeOnYear('1994');  
  HoldForFreePage.typeOnAddress('Alem');  
  HoldForFreePage.typeOnCity('Mar del Plata');
  HoldForFreePage.typeOnPostCode('90210');
  HoldForFreePage.typeOnEmailAddress('test@test.com')
  HoldForFreePage.typeOnPhoneNumber('2236190977');
  HoldForFreePage.selectMonth('May');
  HoldForFreePage.selectCitizenship('Brazil');
  HoldForFreePage.selectGender('Male');
  HoldForFreePage.saveAndContinue();

  HoldForFreePage.typeOnFirstName('Luigi');
  HoldForFreePage.typeOnLastName('Duurden');  
  HoldForFreePage.typeOnDay('05');  
  HoldForFreePage.typeOnYear('1994');
  HoldForFreePage.selectMonth('May');
  HoldForFreePage.selectCitizenship('Brazil');
  HoldForFreePage.selectGender('Male'); 
  HoldForFreePage.saveAndContinue();



  //pagina de metodo de pago
  CheckoutPage.placeHold();
  // pagina de confirmacion de reserva
  ConfirmationPage.getConfirmationMessage().should('be.visible');
  ConfirmationPage.getConfirmationMessage().should('have.text', 'Your cabin is held for');

})
})