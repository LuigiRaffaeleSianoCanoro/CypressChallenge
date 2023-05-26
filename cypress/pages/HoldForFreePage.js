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
        this.elements.firstName().type(firstName);
    }

    typeOnLastName(lastName) {
        this.elements.lastName().type(lastName);
    }

    typeOnDay(day) {
        this.elements.day().type(day);
    }

    typeOnYear(year) {
        this.elements.year().type(year);
    }

    typeOnAddress(address) {
        this.elements.address().type(address);
    }

    typeOnCity(city) {
        this.elements.city().type(city);
    }

    typeOnPostCode(postcode) {
        this.elements.postCode().type(postcode);
    }

    typeOnEmailAddress(email) {
        this.elements.emailAddress().type(email);
    }

    typeOnPhoneNumber(phone) {
        this.elements.phoneNumber().type(phone);
    }

    selectMonth(month) {
        this.elements.month().click();
        cy.wait(1000)
        this.elements.optionFromDropwdown().contains(month).click();
    }

    selectGender(gender) {
        this.elements.gender().click();
        cy.wait(1000)
        this.elements.optionFromDropwdown().contains(gender).click();
    }

    selectCitizenship(citizenship) {
        this.elements.citizenship().click();
        cy.wait(1000)
        this.elements.optionFromDropwdown().contains(citizenship).click();
    }

    saveAndContinue(){
        this.elements.saveAndContinueButton().click();
        cy.wait(1000);
    }
}

module.exports = new HoldForFreePage();