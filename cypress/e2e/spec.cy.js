describe('CruiseBound', () => {
it('Hold for Free', () => {
  cy.visit('https://frontend.cruisebound-qa.com/sailing?id=1')
  cy.get('[data-cy="btnSelectCabin"]').click()
  cy.get('[data-cy="airport"]').click()
  cy.wait(1000)
  cy.get('div#portalSelectOptions div div ul li button').contains('Alabama').click()
  cy.get('[data-cy="btnConfirmGuest"]').click()
  cy.get('span').contains('Interior Upper/Lower').parent('div').parent('div').parent('div').parent('div')
    .find('button[data-cy="btnSelectCabin"]').click()
    cy.get('span').contains('#7300').parent('span').parent('div').parent('div').parent('div').parent('div')
    .find('button[data-cy="btnSelectContinue"]').click()
  cy.get('button[data-cy="holdForFreeButton"]').click()
  cy.get('[data-cy="firstName"]').type("Tyler")
  cy.get('[data-cy="lastName"]').type("Durden")
  cy.get('[data-cy="day"]').type("05")
  cy.get('[data-cy="year"]').type("1994")
  cy.get('[data-cy="address"]').type("Alem")
  cy.get('[data-cy="city"]').type("Mar del Plata")
  cy.get('[data-cy="postCode"]').type("90210")
  cy.get('[data-cy="emailAddress"]').type("test@test.com")
  cy.get('[data-cy="phoneNumber"]').type("2235891951")
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
  cy.get('p').contains('Place hold').click()
  // pagina de confirmacion de reserva
  cy.get('Span').contains('Your cabin is held for')

})
})