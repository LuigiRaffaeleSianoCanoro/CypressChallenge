/**
 * Page Object Model class representing the Hold for Free page.
 * Contains methods and elements related to the Hold for Free page.
 */
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
        month: () => cy.get('[data-cy="month"]'),
        gender: () => cy.get('[data-cy="gender"]'),
        citizenship: () => cy.get('[data-cy="citizenship"]'),
        optionFromDropdown: () => cy.get('button'),
        saveAndContinueButton: () => cy.get('[data-cy="btnSaveContinuePayment"]')
    };

    /**
     * Types the provided value in the First Name input field.
     * @param {string} firstName - The value to type in the First Name input field.
     */
    typeOnFirstName(firstName) {
        this.elements.firstName().type(firstName);
    }

    /**
     * Types the provided value in the Last Name input field.
     * @param {string} lastName - The value to type in the Last Name input field.
     */
    typeOnLastName(lastName) {
        this.elements.lastName().type(lastName);
    }

    /**
     * Types the provided value in the Day input field.
     * @param {string} day - The value to type in the Day input field.
     */
    typeOnDay(day) {
        this.elements.day().type(day);
    }

    /**
     * Types the provided value in the Year input field.
     * @param {string} year - The value to type in the Year input field.
     */
    typeOnYear(year) {
        this.elements.year().type(year);
    }

    /**
     * Types the provided value in the Address input field.
     * @param {string} address - The value to type in the Address input field.
     */
    typeOnAddress(address) {
        this.elements.address().type(address);
    }

    /**
     * Types the provided value in the City input field.
     * @param {string} city - The value to type in the City input field.
     */
    typeOnCity(city) {
        this.elements.city().type(city);
    }

    /**
     * Types the provided value in the Post Code input field.
     * @param {string} postcode - The value to type in the Post Code input field.
     */
    typeOnPostCode(postcode) {
        this.elements.postCode().type(postcode);
    }

    /**
     * Types the provided value in the Email Address input field.
     * @param {string} email - The value to type in the Email Address input field.
     */
    typeOnEmailAddress(email) {
        this.elements.emailAddress().type(email);
    }

    /**
     * Types the provided value in the Phone Number input field.
     * @param {string} phone - The value to type in the Phone Number input field.
     */
    typeOnPhoneNumber(phone) {
        this.elements.phoneNumber().type(phone);
    }

    /**
     * Selects the provided month from the Month dropdown.
     * @param {string} month - The month to select from the dropdown.
     */
    selectMonth(month) {
        this.elements.month().click();
        cy.log('Expanded month dropdown');
        cy.wait(1000);
        this.elements.optionFromDropdown().contains(month).click();
        cy.log(`Selected ${month} from the month dropdown`);
    }

    /**
     * Selects the provided gender from the Gender dropdown.
     * @param {string} gender - The gender to select from the dropdown.
     */
    selectGender(gender) {
        this.elements.gender().click();
        cy.log('Expanded gender dropdown');
        cy.wait(1000);
        this.elements.optionFromDropdown().contains(gender).click();
        cy.log(`Selected ${gender} from the gender dropdown`);
    }

    /**
     * Selects the provided citizenship from the Citizenship dropdown.
     * @param {string} citizenship - The citizenship to select from the dropdown.
     */
    selectCitizenship(citizenship) {
        this.elements.citizenship().click();
        cy.log('Expanded Citizenship dropdown');
        cy.wait(1000);
        this.elements.optionFromDropdown().contains(citizenship).click();
        cy.log(`Selected ${citizenship} from the citizenship dropdown`);
    }

    /**
     * Clicks the Save and Continue button.
     */
    saveAndContinue() {
        this.elements.saveAndContinueButton().click();
        cy.wait(1000);
        cy.log('Clicked Save and Continue successfully');
    }
}

module.exports = new HoldForFreePage();
