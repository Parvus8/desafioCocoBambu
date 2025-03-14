
# **Projeto de Testes de API e UI com Cypress**

Este projeto contém testes automatizados para a interface de usuário (UI) e APIs relacionadas ao fluxo de endereço e carrinho de compras. Os testes são escritos usando **Cypress**, uma ferramenta moderna para testes end-to-end (E2E).

---

## **Sumário**

1. [Pré-requisitos](#pré-requisitos)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Executando os Testes](#executando-os-testes)
5. [Comandos Úteis](#comandos-úteis)
6. [Contribuindo](#contribuindo)
7. [Licença](#licença)

---

## **Pré-requisitos**

Antes de começar, certifique-se de que você tem os seguintes itens instalados:

- **Node.js** (versão 16 ou superior): [Baixar Node.js](https://nodejs.org/)
- **npm** (gerenciador de pacotes do Node.js): Vem instalado com o Node.js.
- **Git** (opcional, para clonar o repositório): [Baixar Git](https://git-scm.com/)

---

## **Configuração do Ambiente**

Siga estas etapas para configurar o ambiente de desenvolvimento:

### 1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

   > **Nota**: Se você não estiver usando Git, baixe o projeto como um arquivo ZIP e extraia-o.

### 2. **Instale as Dependências**
   No diretório do projeto, execute:
   ```bash
   npm install
   ```

   Isso instalará o Cypress e outras dependências necessárias.

### 3. **Verifique a Instalação do Cypress**
   Após a instalação, você pode verificar se o Cypress está funcionando corretamente executando:
   ```bash
   npx cypress open
   ```

   Isso abrirá a interface do Cypress. Feche-a por enquanto, pois vamos configurar os testes.

---

## **Estrutura do Projeto**

Aqui está a estrutura de pastas e arquivos do projeto:

```
cypress/
  ├── e2e/
  │    ├── api/
  │    │    └── cartTests.cy.js       # Testes de API para o carrinho
  │    └── ui/
  │         └── addressFlow.cy.js     # Testes de UI para o fluxo de endereço
  ├── fixtures/
  │    └── cartData.json              # Dados de teste para o carrinho
  └── support/
       ├── commands.js                # Comandos customizados
       └── e2e.js                     # Configurações globais
cypress.config.js                     # Configuração do Cypress
README.md                             # Este arquivo
package.json                          # Dependências do projeto
```

---

## **Executando os Testes**

### **1. Testes de Interface (UI)**
   - Os testes de UI estão localizados em `cypress/e2e/ui/`.
   - Para executar os testes de UI, use o seguinte comando:
     ```bash
     npx cypress open --e2e
     ```
   - Na interface do Cypress, selecione o arquivo `addressFlow.cy.js` para rodar os testes de fluxo de endereço.

### **2. Testes de API**
   - Os testes de API estão localizados em `cypress/e2e/api/`.
   - Para executar os testes de API, use o seguinte comando:
     ```bash
     npx cypress open --e2e
     ```
   - Na interface do Cypress, selecione o arquivo `cartTests.cy.js` para rodar os testes de API do carrinho.

### **3. Execução em Modo Headless**
   - Para rodar os testes em modo headless (sem interface gráfica), use:
     ```bash
     npx cypress run --e2e
     ```
   - Isso executará todos os testes e gerará relatórios no terminal.

---

## **Comandos Úteis**

Aqui estão alguns comandos úteis para trabalhar com o Cypress:

| Comando                          | Descrição                                      |
|----------------------------------|------------------------------------------------|
| `npx cypress open`               | Abre a interface do Cypress.                   |
| `npx cypress run`                | Executa todos os testes em modo headless.      |
| `npx cypress run --spec <caminho>` | Executa um arquivo de teste específico.        |
| `npx cypress verify`             | Verifica se o Cypress está instalado corretamente. |
| `npx cypress info`               | Exibe informações sobre o ambiente do Cypress. |

---

## **Contribuindo**

Se você deseja contribuir para este projeto, siga estas etapas:

1. **Faça um Fork** do repositório.
2. **Crie uma Branch** para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. **Faça Commit** das suas alterações:
   ```bash
   git commit -m "Adicionando nova feature"
   ```
4. **Envie as Alterações**:
   ```bash
   git push origin minha-feature
   ```
5. **Abra um Pull Request** no repositório original.

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## **Dúvidas ou Problemas?**

Se você encontrar algum problema ou tiver dúvidas, sinta-se à vontade para:

- Abrir uma [issue](https://github.com/seu-usuario/nome-do-repositorio/issues) no repositório.
- Entrar em contato com o mantenedor do projeto.

---

**Divirta-se testando!** 🚀
