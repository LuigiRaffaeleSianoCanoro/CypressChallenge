/**
 * Page Object Model class representing the Confirmation page.
 * Contains methods and elements related to the Confirmation page.
 */
class ConfirmationPage {
    elements = {
        confirmationMessage: () => cy.get('div[class="flex flex-col mt-16 mb-8 gap-4"]>span')
    };

    /**
     * Retrieves the confirmation message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The confirmation message element.
     */
    getConfirmationMessage() {
        return this.elements.confirmationMessage();
    }
}

module.exports = new ConfirmationPage();  