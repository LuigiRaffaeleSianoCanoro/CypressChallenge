/**
Page Object Model class representing the Review Your Selection page.
Contains methods and elements related to the Review Your Selection page.
*/
class ReviewYourSelectionPage {
    elements = {
        holdForFreeButton: () => cy.get('button[data-cy="holdForFreeButton"]')
    };
    /**
    
    Clicks on the Hold for Free button.
    @returns {void}
    */
    clickOnHoldForFreeButton() {
        this.elements.holdForFreeButton().click();
        cy.log('Clicked on Hold for Free button successfully');
    }
}
module.exports = new ReviewYourSelectionPage();