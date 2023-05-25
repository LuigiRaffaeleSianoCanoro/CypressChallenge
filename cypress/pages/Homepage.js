class HomePage {
    elements = {
        selectCabin: () => cy.get('[data-cy="btnSelectCabin"]') 
    };

    clickOnSelectCabinButton() {
        this.elements.selectCabin().click();
    }
}

module.exports = new HomePage();