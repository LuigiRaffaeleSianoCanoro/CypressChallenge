class WhosTravellingPage {
    elements = {
        stateOfResidence: () => cy.get('[data-cy="airport"]'),
        dropDownStateOption: () => cy.get('div#portalSelectOptions div div ul li button'),
        continueButton: () => cy.get('[data-cy="btnConfirmGuest"]')
    };

    clickOnDropDownMenuAndSelectOption(option) {
        this.elements.stateOfResidence().click()
        cy.log('Expanded State of residence dropdown')
        cy.wait(1000)
        this.elements.dropDownStateOption().contains(option).click()
        cy.log(`Selected ${option} from the State dropdown`)
    }

    clickOnContinueButton() {
        cy.wait(5000);
        this.elements.continueButton().click()
    }
}

module.exports = new WhosTravellingPage();