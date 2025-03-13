// Importa comandos customizados do arquivo commands.js
import './commands';

beforeEach(() => {
    cy.clearCookies();
  // Ignora exceções não capturadas (útil para evitar falhas em erros não críticos)
  Cypress.on('uncaught:exception', (err) => {
    console.error('Exceção não capturada:', err.message);
    // Retorna `false` para impedir que o Cypress falhe o teste
    return false;
  });

  // Define o tamanho da viewport para desktop
  cy.viewport(1280, 720);
});

// Hooks opcionais
after(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});