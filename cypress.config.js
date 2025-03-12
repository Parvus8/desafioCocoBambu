const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app-hom.cocobambu.com/delivery',
    setupNodeEvents(on, config) {
      // Configurações adicionais (opcional)
    },
  },
});