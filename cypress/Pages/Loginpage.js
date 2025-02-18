class LoginPage {
  // Elements
  usernameField = '#email';
  passwordField = '#password';
  loginButton = 'button[type="submit"]';
  signupButton = '.signup-btn-sign-page';

  // Method to enter username (Initiator)
  enterInitUsername(initiatorUname) {
    cy.get(this.usernameField).clear().type(initiatorUname);
  }

  // Method to enter password
  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }

  // Method to click the login button
  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  // Method to click the signup button
  clickSignupButton() {
    cy.get(this.signupButton).click();
  }
}

export default LoginPage;
