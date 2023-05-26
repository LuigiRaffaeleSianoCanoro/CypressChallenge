/**
Page Object Model class representing the Select Your Cabin page.
Contains methods and elements related to the Select Your Cabin page.
*/
class SelectYourCabinPage {
    elements = {
        selectAndContinueButton: () =>
            cy
                .get('span')
                .contains('#7300')
                .parent('span')
                .parent('div')
                .parent('div')
                .parent('div')
                .parent('div')
                .find('button[data-cy="btnSelectContinue"]')
    };

    /**    
    Clicks on the Select and Continue button.
    @returns {void}
    */
    clickOnSelectAndContinueButton() {
        this.elements.selectAndContinueButton().click();
        cy.log('Clicked on Select and Continue Successfully');
    }
}
module.exports = new SelectYourCabinPage();