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
  HoldForFreePage.typeOnLastName('Durden');  
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

  cy.get('[data-cy="btnSaveContinuePayment"]').click()

  cy.get('[data-cy="firstName"]').type("John")
  cy.get('[data-cy="lastName"]').type("Durden")
  cy.get('[data-cy="day"]').type("05")
  cy.get('[data-cy="year"]').type("1994")
  
  cy.get('[data-cy="month').click()
  cy.wait(1000)
  cy.get('Button').contains('May').click()
  cy.get('[data-cy="citizenship"]').click()
  cy.wait(1000)
  cy.get('Button').contains('Brazil').click()
  cy.get('[data-cy="gender"]').click()
  cy.wait(1000)
  cy.get('Button').contains('Male').click()

  cy.get('[data-cy="btnSaveContinuePayment"]').click()


  //pagina de metodo de pago
  cy.get('Span').contains('Hold cabin').click()
  cy.wait('1000');
  cy.get('p').contains('Place hold').click()
  // pagina de confirmacion de reserva
  cy.get('Span').contains('Your cabin is held for')

})
})