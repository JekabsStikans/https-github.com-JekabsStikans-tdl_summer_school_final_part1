import BasePage from "./basePage";

class CheckoutCompletePage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/checkout-complete.html";
  }

  static get completeHeader(){
    return cy.get('.complete-header');
  }
}

export default CheckoutCompletePage;
