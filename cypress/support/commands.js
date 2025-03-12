Cypress.Commands.add('searchAddress', (address) => {
    cy.get('[data-cy="address-input"]').type(address);
    cy.wait(500); // Aguarda sugestões
  });
  
  Cypress.Commands.add('selectFirstSuggestion', () => {
    cy.get('[data-cy="address-suggestion"]').first().click();
  });