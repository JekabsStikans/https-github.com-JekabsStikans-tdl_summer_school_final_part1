import BasePage from "./basePage";

class CheckoutStep2Page extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/checkout-step-two.html";
  }

  static get cartList(){
    return cy.get('.cart_list');
  }

  static get finishButton(){
    return cy.get('[data-test="finish"]');
  }
}

export default CheckoutStep2Page;
