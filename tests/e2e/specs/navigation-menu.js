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
    cy.wait(1000);
    cy.get('.container-data__button').children('button').click();
  });
  it('Navigating in the mobile menu', () => {
    cy.get('.link-search').click();
    cy.wait(1000);
    cy.get('.img-new-quiz').click();
    cy.wait(1000);
    cy.get('.link-stats').click();
    cy.wait(1000);
    cy.get('.link-profile').click();
    cy.wait(1000);
    cy.get('.link-home').click();
    cy.wait(1000);
  });
});
