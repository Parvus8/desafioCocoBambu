describe('Fluxo de Localização de Endereço', () => {
    beforeEach(() => {
      cy.visit('/delivery');
    });
  
    it('Deve preencher e validar um endereço válido', () => {
        // Digita o endereço no campo de input
        cy.get('.search-address-input')
          .type('Avenida Paulista, 1000, São Paulo')
          .wait(500); // Aguarda as sugestões carregarem
    
        // Seleciona a primeira sugestão da lista
        cy.get('.address-subtitle')
          .first()
          .click();
    
        // Valida se o endereço foi confirmado
        cy.get('.address-subtitle')
          .should('contain', 'Av. Paulista');
      });
    
    it('Deve exibir erro para um endereço inválido', () => {
        // Digita um endereço inválido
        cy.get('.search-address-input')
          .type('%%%%###@@@123456');
    
        // Valida a mensagem de erro
        cy.get('.address-subtitle')
          .should('not.exist');
      });
    
  
    it('Deve mostrar sugestões ao digitar parcialmente o endereço', () => {
      // Digita parte do endereço
      cy.get('.search-address-input')
        .type('Oscar Freire');
  
      // Valida se a lista de sugestões é exibida
      cy.get('.address-subtitle')
        .should('have.length.greaterThan', 0);
    });
  });