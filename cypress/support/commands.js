Cypress.Commands.add('searchAddress', (address) => {
    cy.get('[data-cy="address-input"]').type(address);
    cy.wait(500); // Aguarda sugestões
  });
  
  Cypress.Commands.add('selectFirstSuggestion', () => {
    cy.get('[data-cy="address-suggestion"]').first().click();
  });
  
Cypress.Commands.add('screenshotWithTimestamp', (name) => {
    const timestamp = new Date().toLocaleString();
    const fileName = `${name}-${timestamp}`;

    cy.log(`Taking screenshot: ${fileName}`);

    cy.screenshot(fileName, { capture: 'viewport' });

    cy.get('body').then(($body) => {
        const $dateTime = Cypress.$(`<div>${timestamp}</div>`);
        $body.append($dateTime);
        cy.log(`Timestamp: ${timestamp}`);
    });
});