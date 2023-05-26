class SelectACabinTypePage {
    elements = {
        selectACabinTypeButton: () => cy.get('span').contains('Interior Upper/Lower').parent('div').parent('div').parent('div').parent('div')
        .find('button[data-cy="btnSelectCabin"]')
    };

    clickOnSelectACabinTypeButton() {
        this.elements.selectACabinTypeButton().click()
        cy.log('Clicked on Select a Cabin Button successfully')
    }
}

module.exports = new SelectACabinTypePage();