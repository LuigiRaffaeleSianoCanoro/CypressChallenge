class SelectYourCabinPage {
    elements = {
        selectAndContinueButton: () => cy.get('span').contains('#7300').parent('span').parent('div').parent('div').parent('div').parent('div')
        .find('button[data-cy="btnSelectContinue"]')
    };

    clickOnSelectAndContinueButton() {
        this.elements.selectAndContinueButton().click();
    }
}

module.exports = new SelectYourCabinPage();