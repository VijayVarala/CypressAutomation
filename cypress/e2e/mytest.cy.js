describe('sample test', () => {
  it('login', () => {
    cy.visit("http://austin-web-react.s3-website.ap-south-1.amazonaws.com/login/false", { failOnStatusCode: false });
    cy.get("#email").type("vijayinitiator@gmail.com")
    cy.get("#password").type("1234567890")
    cy.get(".signIn-btn").click()
    cy.url().should('eq','http://austin-web-react.s3-website.ap-south-1.amazonaws.com/dashboard')
    cy.title().should('include','Austin')
  });
});
