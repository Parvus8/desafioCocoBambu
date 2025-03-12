const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app-hom.cocobambu.com/',
    setupNodeEvents(on, config) {
      // Configurações adicionais (opcional)
    },
  },
});
//TODO: documentar configs