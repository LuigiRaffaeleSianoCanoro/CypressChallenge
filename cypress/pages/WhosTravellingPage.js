class WhosTravellingPage {
    elements = {
        stateOfResidence: () => cy.get('[data-cy="airport"]'),
        dropDownStateOption: () => cy.get('div#portalSelectOptions div div ul li button'),
        continueButton: () => cy.get('[data-cy="btnConfirmGuest"]')
    };

    clickOnDropDownMenuAndSelectOption(option) {
        this.elements.stateOfResidence().click();
        cy.wait(1000)
        this.elements.dropDownStateOption().contains(option).click();
    }

    clickOnContinueButton() {
        cy.wait(5000);
        this.elements.continueButton().click();
    }
}

module.exports = new WhosTravellingPage();