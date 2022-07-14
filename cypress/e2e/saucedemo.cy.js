import HomePage from "../pageObjects/HomePage";
import InventoryPage from "../pageObjects/InventoryPage";


// - Part 1 - Swag Labs - https://www.saucedemo.com/
describe("Swag labs testing", () => {
    beforeEach(() => {
        HomePage.visit();
    });
    

    it("1. - Login with locked_out_user", () => {
        //     - Enter username - “locked_out_user”
        HomePage.usernameInput.type("locked_out_user");
        //     - Enter password
        HomePage.passwordInput.type("secret_sauce");
        HomePage.loginButton.click();
        //     - Validate that user sees error - “Epic sadface: Sorry, this user has been locked out.”
        HomePage.errorMsg.should("be.visible").and("have.text", "Epic sadface: Sorry, this user has been locked out.");
    });


    it("2. - Login with wrong password", () => {
        //     - Enter username - standard_user
        HomePage.usernameInput.type("standard_user");
        //     - Enter a wrong password
        HomePage.passwordInput.type("secret_soos");
        HomePage.loginButton.click();
        //     - Validate that user sees error - “Epic sadface: Username and password do not match any user in this service”
        HomePage.errorMsg.should("be.visible").and("have.text", "Epic sadface: Username and password do not match any user in this service");
    });
    
    
    it("3. - Validate item amount", () => {
        //     - Log into page with standard user credentials
        HomePage.doStandartLogin();
        //     - Validate that default item amount is 6
        InventoryPage.inventoryList.find(".inventory_item").should("have.lengthOf", 6);
    });
    
    
    it("4. - Sort items - Price high to low", () => {
        //     - Log into page with standard user credentials
        HomePage.doStandartLogin();
        //     - Set filter to Price high to low
        InventoryPage.sortProductsSelector.select("Price (high to low)");
        //     - Validate that first item is “Sauce Labs Fleece Jacket”
        InventoryPage.inventoryFirstItem.find(".inventory_item_name").should("have.text", "Sauce Labs Fleece Jacket");
        //     - Validate that the first item costs “$49.99”
        InventoryPage.inventoryFirstItem.find(".inventory_item_price").should("have.text", "$49.99");
    });
    
    
    it("5. - Sort items - Price low to High", () => {
        //     - Log into page with standard user credentials
        HomePage.doStandartLogin();
        //     - Set filter to Price low to high
        InventoryPage.sortProductsSelector.select("Price (low to high)");
        //     - Validate that first item is “Sauce Labs Onesie”
        InventoryPage.inventoryFirstItem.find(".inventory_item_name").should("have.text", "Sauce Labs Onesie");
        //     - Validate that the first item costs “$7.99”
        InventoryPage.inventoryFirstItem.find(".inventory_item_price").should("have.text", "$7.99");
    });
    
    
    it("6. - Sort items - Name (Z to A)", () => {
        //     - Log into page with standard user credentials
        HomePage.doStandartLogin();
        //     - Set filter to Name (Z to A)
        InventoryPage.sortProductsSelector.select("Name (Z to A)");
        //     - Validate that first item is “Test.allTheThings() T-Shirt (Red)”
        InventoryPage.inventoryFirstItem.find(".inventory_item_name").should("have.text", "Test.allTheThings() T-Shirt (Red)");
    });
    
    
    it.only("7. - Validate shopping cart badge amount", () => {
        //     - Log into page with standard user credentials
        //     - Open “Sauce Labs Bolt T-Shirt”
        //     - Click “Add to cart“
        //     - Validate that shoping cart badge is 1 (the red pop-up number)
        //     - Click “Back to products”
        //     - Open “Sauce Labs Bike Light”
        //     - Click “Add to cart”
        //     - Validate that shoping cart badge is 2 (the red pop-up number)
    });
    
    
    it("8. - Reset App State", () => {
        //     - Log into page with standard user credentials
        //     - Open “Sauce Labs Bolt T-Shirt”
        //     - Click “Add to cart”
        //     - Click “Back to products”
        //     - Validate that shoping cart badge is 1 (the red pop-up number)
        //     - Click “Stack/Burger” icon
        //     - Click “Reset App State”
        //     - Validate that the badge no longer exists
    });
    
    
    it("9. - Validate shopping cart remove button functionality", () => {
        //     - Log into page with standard user credentials
        //     - Open “Sauce Labs Bolt T-Shirt”
        //     - Click “Add to cart”
        //     - Validate that shoping cart badge is 1 (the red pop-up number)
        //     - Click “Remove” button
        //     - Validate that the badge no longer exists
    });
    
    
    it("10. - Buy a T-shirt", () => {
        //     - Log into page with standard user credentials
        //     - Log into page with standard user credentials
        //     - Open “Test.allTheThings() T-Shirt (Red)”
        //     - Click “Add to cart”
        //     - Click “Shopping cart”
        //     - Click “Checkout”
        //     - Fill in First name
        //     - Fill in Last name
        //     - Fill in ZIP/Postal code
        //     - Click Continue
        //     - Validate item name “Test.allTheThings() T-Shirt (Red)”
        //     - Click “Finnish”
        //     - Validate header “THANK YOU FOR YOUR ORDER”
    });
});