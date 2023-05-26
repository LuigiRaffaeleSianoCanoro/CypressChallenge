class ReviewYourSelectionPage {
    elements = {
        holdForFreeButton: () => cy.get('button[data-cy="holdForFreeButton"]')
    };

    clickOnHoldForFreeButton() {
        this.elements.holdForFreeButton().click()
        cy.log('Clicked on Hold for Free button successfully')
    }
}

module.exports = new ReviewYourSelectionPage();