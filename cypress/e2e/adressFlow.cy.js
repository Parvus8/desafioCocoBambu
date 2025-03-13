describe('Fluxo de Localização de Endereço', () => {
    beforeEach(() => {
      cy.visit('/delivery');
    });
  
    it('Deve preencher e validar um endereço válido', () => {
        // Digita o endereço no campo de input
        cy.get('[data-cy="address-input"]')
          .type('Avenida Paulista, 1000, São Paulo')
          .wait(500); // Aguarda as sugestões carregarem
    
        // Seleciona a primeira sugestão da lista
        cy.get('[data-cy="address-suggestion"]')
          .first()
          .click();
    
        // Valida se o endereço foi confirmado
        cy.get('[data-cy="confirmed-address"]')
          .should('contain', 'Avenida Paulista');
      });
    
    it('Deve exibir erro para um endereço inválido', () => {
        // Digita um endereço inválido
        cy.get('[data-cy="address-input"]')
          .type('Rua Inexistente 123456');
    
        // Valida a mensagem de erro
        cy.get('[data-cy="address-error"]')
          .should('contain', 'Endereço não encontrado');
      });
    
  
    it('Deve mostrar sugestões ao digitar parcialmente o endereço', () => {
      // Digita parte do endereço
      cy.get('[data-cy="address-input"]')
        .type('Oscar Freire');
  
      // Valida se a lista de sugestões é exibida
      cy.get('[data-cy="address-suggestion"]')
        .should('have.length.greaterThan', 0);
    });
  });