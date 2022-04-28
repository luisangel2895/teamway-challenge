describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:8080/');
    cy.wait(5000);
  });
});
