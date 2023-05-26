class CheckOutPage {
    elements = {
        holdCabinButton: () => cy.get('Span').contains('Hold cabin'),
        placeHoldButton: () => cy.get('p').contains('Place hold')
    };

    placeHold() {
        this.elements.holdCabinButton().click();
        cy.wait(1000);
        this.elements.placeHoldButton().click();
    }
}

module.exports = new CheckOutPage();