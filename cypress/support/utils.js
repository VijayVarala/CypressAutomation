export function login(username, password) {
    cy.visit('/login/false', { failOnStatusCode: false });
    cy.get('#email').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  }
  