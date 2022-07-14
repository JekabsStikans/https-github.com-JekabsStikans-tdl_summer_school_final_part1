import BasePage from "./basePage";

class CheckoutStep1Page extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/checkout-step-one.html";
  }

  static get firstNameInput(){
    return cy.get('[data-test="firstName"]');
  }

  static get lastNameInput(){
    return cy.get('[data-test="lastName"]');
  }

  static get postalCodeInput(){
    return cy.get('[data-test="postalCode"]');
  }

  static get continueButton(){
    return cy.get('[data-test="continue"]');
  }
}

export default CheckoutStep1Page;
