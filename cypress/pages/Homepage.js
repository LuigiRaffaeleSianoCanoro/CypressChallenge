/**
Page Object Model class representing the Homepage.
Contains methods and elements related to the Homepage.
*/
class HomePage {
    elements = {
        selectCabin: () => cy.get('[data-cy="btnSelectCabin"]')
    }

    /**
     
    Clicks on the Select Cabin button.
    @returns {void}
    */
    clickOnSelectCabinButton() {
        this.elements.selectCabin().click();
        cy.log('Clicked on Select Cabin Button successfully');
    }
};
module.exports = new HomePage();