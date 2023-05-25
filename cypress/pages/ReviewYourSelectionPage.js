class ReviewYourSelectionPage {
    elements = {
        holdForFreeButton: () => cy.get('button[data-cy="holdForFreeButton"]')
    };

    clickOnHoldForFreeButton() {
        this.elements.holdForFreeButton().click();
    }
}

module.exports = new ReviewYourSelectionPage();