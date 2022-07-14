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
}

export default InventoryPage;
