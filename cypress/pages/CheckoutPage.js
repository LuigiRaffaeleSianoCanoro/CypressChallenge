/**
 * Page Object Model class representing the Checkout page.
 * Contains methods and elements related to the Checkout page.
 */
class CheckoutPage {
    elements = {
      holdCabinButton: () => cy.get('span').contains('Hold cabin'),
      placeHoldButton: () => cy.get('p').contains('Place hold')
    };
  
    /**
     * Clicks on the Hold Cabin button and then clicks on the Place Hold button.
     * Simulates the user placing a hold on the cabin.
     */
    placeHold() {
      this.elements.holdCabinButton().click();
      cy.log('Clicked Hold Cabin Button');
      cy.wait(1000);
      this.elements.placeHoldButton().click();
      cy.log('Clicked Place Hold Button');
    }
  }
  
  module.exports = new CheckoutPage();