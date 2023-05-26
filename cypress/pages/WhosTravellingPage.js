/**
Page Object Model class representing the Who's Travelling page.
Contains methods and elements related to the Who's Travelling page.
*/
class WhosTravellingPage {
    elements = {
    stateOfResidence: () => cy.get('[data-cy="airport"]'),
    dropDownStateOption: () => cy.get('div#portalSelectOptions div div ul li button'),
    continueButton: () => cy.get('[data-cy="btnConfirmGuest"]')
    };
    /**    
    Clicks on the drop-down menu and selects the specified option for the State of Residence.
    @param {string} option - The option to select for the State of Residence.
    @returns {void}
    */
    clickOnDropDownMenuAndSelectOption(option) {
    this.elements.stateOfResidence().click();
    cy.log('Expanded State of residence dropdown');
    cy.wait(1000);
    this.elements.dropDownStateOption().contains(option).click();
    cy.log(`Selected ${option} from the State dropdown`);
    }
    /**    
    Clicks on the Continue button.
    @returns {void}
    */
    clickOnContinueButton() {
    cy.wait(5000);
    this.elements.continueButton().click();
    }
    }
    module.exports = new WhosTravellingPage();