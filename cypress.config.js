const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app-hom.cocobambu.com/',
    setupNodeEvents(on, config) {
        on('task', {
            log(message) {
              console.log(message);
              return null;
            },
          });        
    },
    // Diretório onde os testes estão localizados
    specPattern: 'cypress/e2e/**/*.cy.js',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: true,
    screenshotOnRunFailure: true,
  },
});
//TODO: documentar configs