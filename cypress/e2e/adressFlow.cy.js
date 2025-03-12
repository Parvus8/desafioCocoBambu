describe('Fluxo de Localização de Endereço', () => {
    beforeEach(() => {
      cy.visit('/delivery'); // Navega para a página inicial
    });
  
    it('Deve localizar um endereço válido', () => {
      // Insere um endereço válido e seleciona a primeira sugestão
      cy.get('[data-cy="address-input"]')
        .type('Avenida Paulista, 1000, São Paulo') //TODO: definir endereco
        .wait(500); // Aguarda carregamento das sugestões
  
      // Seleciona a primeira sugestão da lista
      cy.get('[data-cy="address-suggestion"]')
        .first()
        .click();
  
      // Verifica se o endereço foi confirmado
      cy.get('[data-cy="confirmed-address"]')
        .should('contain', 'Avenida Paulista');
    });
  
    it('Deve exibir erro para endereço inválido', () => {
      // Insere um endereço inexistente
      cy.get('[data-cy="address-input"]')
        .type('Rua Inexistente 123456');
  
      // Verifica mensagem de erro
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
  
    it('Deve bloquear o fluxo se o endereço estiver fora da área de cobertura', () => {
      // Insere um endereço fora da área de entrega
      cy.get('[data-cy="address-input"]')
        .type('Rio de Janeiro, Copacabana')
        .wait(500);
  
      // Verifica mensagem de área não coberta
      cy.get('[data-cy="coverage-error"]')
        .should('contain', 'Não entregamos nesta região');
    });
  });