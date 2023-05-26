class HoldForFreePage {
    elements = {
        firstName: () => cy.get('[data-cy="firstName"]'),
        lastName: () => cy.get('[data-cy="lastName"]'),
        day: () => cy.get('[data-cy="day"]'),
        year: () => cy.get('[data-cy="year"]'),
        address: () => cy.get('[data-cy="address"]'),
        city: () => cy.get('[data-cy="city"]'),
        postCode: () => cy.get('[data-cy="postCode"]'),
        emailAddress: () => cy.get('[data-cy="emailAddress"]'),
        phoneNumber: () => cy.get('[data-cy="phoneNumber"]'),
        month: () => cy.get('[data-cy="month'),
        gender: () => cy.get('[data-cy="gender"]'),
        citizenship: () => cy.get('[data-cy="citizenship"]'),
        optionFromDropwdown: () => cy.get('Button'),
        saveAndContinueButton: () => cy.get('[data-cy="btnSaveContinuePayment"]')
    };

    typeOnFirstName(firstName) {
        this.elements.firstName().type(firstName)
    }

    typeOnLastName(lastName) {
        this.elements.lastName().type(lastName)
    }

    typeOnDay(day) {
        this.elements.day().type(day)
    }

    typeOnYear(year) {
        this.elements.year().type(year)
    }

    typeOnAddress(address) {
        this.elements.address().type(address)
    }

    typeOnCity(city) {
        this.elements.city().type(city)
    }

    typeOnPostCode(postcode) {
        this.elements.postCode().type(postcode)
    }

    typeOnEmailAddress(email) {
        this.elements.emailAddress().type(email)
    }

    typeOnPhoneNumber(phone) {
        this.elements.phoneNumber().type(phone)
    }

    selectMonth(month) {
        this.elements.month().click()
        cy.log('Expanded month dropdown')
        cy.wait(1000)
        this.elements.optionFromDropwdown().contains(month).click()
        cy.log(`Selected ${month} from the month dropdown`)
    }

    selectGender(gender) {
        this.elements.gender().click()
        cy.log('Expanded gender dropdown')
        cy.wait(1000)
        this.elements.optionFromDropwdown().contains(gender).click()
        cy.log(`Selected ${gender} from the gender dropdown`)
    }

    selectCitizenship(citizenship) {
        this.elements.citizenship().click()
        cy.log('Expanded Citizenship dropdown')
        cy.wait(1000)
        this.elements.optionFromDropwdown().contains(citizenship).click()
        cy.log(`Selected ${citizenship} from the citizenship dropdown`)
    }

    saveAndContinue(){
        this.elements.saveAndContinueButton().click()
        cy.wait(2000)
        cy.log('Clicked Save and Continue successfully')
    }
}

module.exports = new HoldForFreePage();