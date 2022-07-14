import BasePage from "../pageObjects/basePage";

class CartPage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/cart.html";
  }

  static get checkoutButton(){
    return cy.get('[data-test="checkout"]');
  }
}

export default CartPage;
