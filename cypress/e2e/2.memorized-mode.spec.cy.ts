describe('App in memorized mode', () => {
  it('should calculate consecutive values when travelling along tabs', () => {
    cy.visit('/');
    cy.contains('Cutting parameters calculator').should('be.visible');
    cy.contains('Choose an option, please').should('be.visible');
    cy.get('[data-testid="clipboard-switcher"]').should('be.visible').click();
    cy.get('[data-testid="link-surface-speed"]').click();
    cy.get('[data-testid="input-surface-speed-diameter"]').should('be.visible').clear().type('123');
    cy.get('[data-testid="input-surface-speed-spindle-speed"]').should('be.visible').clear().type('456');
    cy.get('[data-testid="button-submit"]').should('be.visible').click();
    cy.get('[data-testid="result-surface-speed"]').should('be.visible').contains('176.21');

    cy.get('[data-testid="link-spindle-speed"]').click();
    cy.get('[data-testid="input-spindle-speed-diameter"]').should('be.visible').should('have.value', '123');
    cy.get('[data-testid="input-spindle-speed-surface-speed"]').should('be.visible').should('have.value', '176.21');
    cy.get('[data-testid="button-submit"]').should('be.visible').click();
    cy.get('[data-testid="result-spindle-speed"]').should('be.visible').contains('456');

    cy.get('[data-testid="link-feedrate"]').click();
    cy.get('[data-testid="input-feedrate-spindle-speed"]').should('be.visible').should('have.value', '456');
    cy.get('[data-testid="FPR-radio"]').should('be.visible').click();
    cy.get('[data-testid="FPR-input"]').should('be.visible').clear().type('1.2');
    cy.get('[data-testid="button-submit"]').should('be.visible').click();
    cy.get('[data-testid="result-feedrate"]').should('be.visible').contains('547');

    cy.get('[data-testid="FPT-radio"]').should('be.visible').click();
    cy.get('[data-testid="FPT-input"]').should('be.visible').clear().type('0.12');
    cy.get('[data-testid="input-feedrate-tooth-number"]').should('be.visible').clear().type('12');
    cy.get('[data-testid="button-submit"]').should('be.visible').click();
    cy.get('[data-testid="result-feedrate"]').should('be.visible').contains('657');

    cy.get('[data-testid="link-tapping-feed"]').click();
    cy.get('[data-testid="input-tapping-spindle-speed"]').should('be.visible').should('have.value', '456');
    cy.get('[data-testid="select-tapping-diameter"]').should('be.visible').select('8');
    cy.get('[data-testid="result-thread-pitch"]').should('be.visible').contains('1.25');
    cy.get('[data-testid="button-submit"]').should('be.visible').click();
    cy.get('[data-testid="result-tapping-feedrate"]').should('be.visible').contains('570');
  });
});