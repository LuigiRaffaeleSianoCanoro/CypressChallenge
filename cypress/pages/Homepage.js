class HomePage {
    elements = {
        selectCabin: () => cy.get('[data-cy="btnSelectCabin"]') 
    };

    clickOnSelectCabinButton() {
        this.elements.selectCabin().click()
        cy.log('Clicked on Select Cabin Button successfully')
    }
}

module.exports = new HomePage();