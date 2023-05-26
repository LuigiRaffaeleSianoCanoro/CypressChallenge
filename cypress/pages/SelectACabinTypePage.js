/**
Page Object Model class representing the Select a Cabin Type page.
Contains methods and elements related to the Select a Cabin Type page.
*/
class SelectACabinTypePage {
    elements = {
        selectACabinTypeButton: () =>
            cy
                .get('span')
                .contains('Interior Upper/Lower')
                .parent('div')
                .parent('div')
                .parent('div')
                .parent('div')
                .find('button[data-cy="btnSelectCabin"]')
    };

    /**    
    Clicks on the Select a Cabin Type button.
    @returns {void}
    */
    clickOnSelectACabinTypeButton() {
        this.elements.selectACabinTypeButton().click();
        cy.log('Clicked on Select a Cabin Button successfully');
    }
}
module.exports = new SelectACabinTypePage();