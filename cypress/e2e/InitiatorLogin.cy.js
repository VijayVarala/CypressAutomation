import LoginPage from '../Pages/Loginpage';  // Correct import statement
import testdata from '../fixtures/testdata.json'

describe('Initiator Login Test', () => {
  const loginPage = new LoginPage();  // Correct class instantiation

  beforeEach(() => {
    cy.visit('http://austin-web-react.s3-website.ap-south-1.amazonaws.com/login/false',{
      failOnStatusCode: false  // Prevent Cypress from failing on 404 status
    });
  });

  it('should login as an initiator', () => {
    loginPage.enterInitUsername(testdata.initiator.username);
    loginPage.enterPassword(testdata.initiator.password);
    loginPage.clickLoginButton();
    
    // Add your assertions after logging in
    cy.url().should('include', '/dashboard');
  });
});

