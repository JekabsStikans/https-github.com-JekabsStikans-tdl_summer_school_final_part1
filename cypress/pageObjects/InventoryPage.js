import BasePage from "../pageObjects/basePage";

class InventoryPage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/inventory.html";
  }

  static get inventoryList(){
    return cy.get(".inventory_list");
  }

  static get sortProductsSelector(){
    return cy.get('[data-test="product_sort_container"]');
  }

  static get inventoryFirstItem(){
      return this.inventoryList.find(".inventory_item").first();
  }

  static get addToCartButton(){
      return cy.get('[data-test^="add-to-cart-"]');
  }

  static get shoppingCartBadge(){
    return cy.get(".shopping_cart_badge");
  }

  static get backToProductsButton(){
      return cy.get('[data-test="back-to-products"]');
  }

  static get reactBurgerMenuButton(){
      return cy.get("#react-burger-menu-btn");
  }

  static get resetSidebarLink(){
      return cy.get("#reset_sidebar_link");
  }

  static get removeFromCartButton(){
      return cy.get('[data-test^="remove-"]');
  }

  static get shoppingCartLink(){
    return cy.get(".shopping_cart_link");
  }
}

export default InventoryPage;
