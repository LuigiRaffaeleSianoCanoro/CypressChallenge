class ConfirmationPage {
    elements = {
        confirmationMessage: () => cy.get('div[class="flex flex-col mt-16 mb-8 gap-4"]>span')
    };

    getConfirmationMessage() {
        return this.elements.confirmationMessage()
    }
}

module.exports = new ConfirmationPage();