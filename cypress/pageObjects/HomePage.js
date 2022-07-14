import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/";
  }

  static get usernameInput(){
    return cy.get('[data-test="username"]');
  }

  static get passwordInput(){
    return cy.get('[data-test="password"]');
  }

  static get loginButton(){
    return cy.get('[data-test="login-button"]');
  }

  static get errorMsg(){
    return cy.get('[data-test="error"]');
  }

  static doStandartLogin(){
    this.usernameInput.type("standard_user");
    this.passwordInput.type("secret_sauce");
    this.loginButton.click();
  }
}

export default HomePage;
