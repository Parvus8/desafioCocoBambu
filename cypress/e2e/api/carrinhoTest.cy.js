// cypress/e2e/api/cartTests.cy.js

describe('Testes de API para o Carrinho', () => {
    beforeEach(() => {
      // Carrega os dados de teste do arquivo de fixtures
      cy.fixture('carrinhoData').as('cartData');
    });
  
    it('Deve adicionar itens ao carrinho usando fixtures', function () {
      // Extrai os dados de addCart do fixture
      const { addCart } = this.cartData;
  
      // Faz a requisição POST para adicionar itens ao carrinho
      cy.request({
        method: 'POST',
        url: 'https://dummyjson.com/carts/add',
        headers: { 'Content-Type': 'application/json' },
        body: addCart,
      }).then((response) => {
        // Validações
        expect(response.status).to.eq(201);
        expect(response.body.products).to.have.length(addCart.products.length);
      });
    });
  
    it('Deve atualizar o carrinho usando fixtures', function () {
      // Extrai os dados de updateCart do fixture
      const { updateCart } = this.cartData;
  
      // Faz a requisição PUT para atualizar o carrinho
      cy.request({
        method: 'PUT',
        url: 'https://dummyjson.com/carts/1',
        headers: { 'Content-Type': 'application/json' },
        body: updateCart,
      }).then((response) => {
        // Validações
        expect(response.status).to.eq(200);
        expect(response.body.products).to.satisfy((products) =>
          products.some((product) => product.id === 1)
        );
      });
    });
  });