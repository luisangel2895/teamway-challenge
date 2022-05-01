describe('My First Test', () => {
  beforeEach(() => {
    // Phone pixel 5
    cy.viewport(393, 851);
  });
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/');
  });
  it('Wait to finish the starting loader', () => {
    cy.wait(3000);
  });
  it('Enter in the application', () => {
    cy.get('.container-data__button').children('button').click();
    cy.wait(1500);
    cy.get('.container-data__button').children('button').click();
    cy.wait(1500);
  });
  it('Enter in math test', () => {
    cy.get('.quiz-component').first().click();
    cy.wait(1500);
  });
  it('Solving the test', () => {
    for (let i = 0; i < 14; i += 1) {
      cy.get('.question-alternatives').children('.alternative').last().click();
      cy.get('.question-button').children('button').click();
      cy.wait(1500);
    }
  });
  it('Enter to review answears', () => {
    cy.get('.result__trophy').children('button').click();
    cy.wait(2000);
  });
  it('Go back to our results', () => {
    cy.get('.review-answers__equis-icon').click();
    cy.wait(1500);
  });
  it('Finally go back to home', () => {
    cy.get('.result__button').children('button').click();
    cy.wait(1500);
  });
});
