class CheckOutPage {
    elements = {
        holdCabinButton: () => cy.get('Span').contains('Hold cabin'),
        placeHoldButton: () => cy.get('p').contains('Place hold')
    };

    placeHold() {
        this.elements.holdCabinButton().click()
        cy.log('Clicked Hold Cabin Button')
        cy.wait(1000)
        this.elements.placeHoldButton().click()
        cy.log('Clicked Place Hold Button')
    }
}

module.exports = new CheckOutPage()