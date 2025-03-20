# Automação de Testes com Playwright
> **Testes Automatizados** para a Aplicação *Sauce Demo* com *Playwright*, utilizando a estrutura *Application Actions*.

Este projeto implementa uma suíte de testes automatizados que tem por objetivo cobrir funcionalidades essenciais da aplicação, como login, navegação e manipulação de itens no carrinho de compras, ações de checkout, dentre outras.

## 💻 Tecnologias Usadas

- Playwright: Framework utilizado para automação de testes de aplicações web.
- TypeScript: Linguagem utilizada para escrever os testes.
- Node.js: Ambiente de execução.
- Git: Controle de versão.
- GitHub: Repositório remoto.

## 📌 Pré-requisitos

Para rodar este projeto, você precisa ter os seguintes pré-requisitos instalados:

- Node.js
- Git
- Arquivo `.env` com as respectivas credenciais

> OBS: Para este projeto, foram utilizadas credenciais públicas encontradas no site do Sauce Demo. Porém, para fins de manter a boa prática, optei por utilizar variáveis de ambientes.

## 🎬 Instalação

1. Faça o clone do repositório:

   `git clone https://github.com/seu-usuario/nome-do-repositorio.git`

2. Navegue até o diretório do projeto:

   `cd <nome-do-repositorio>`

3. Instale as dependências necessárias:

   `npm install`

4. Execute os testes:

   `npm test`

## 🪄 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

- **actions/**: Contém as classes responsáveis por agrupar as ações realizadas na aplicação.
- **config/**: Contém arquivos de configuração (como variáveis de ambiente e URL da aplicação).
- **tests/**: Contém os arquivos de teste, onde os cenários são descritos e executados.

```js 
playwright-project/
│
├── .github/
│   └── workflows/
│       └── test.yml                # GitHub Actions para CI/CD
│
├── node_modules/                   # Dependências do Node.js
│
├── src/
│   ├── actions/                    # Contém as "Application Actions"
│   │   ├── loginActions.ts         # Ações relacionadas ao login
│   │   ├── productsActions.ts      # Ações relacionadas aos produtos
│   │   ├── cartActions.ts          # Ações relacionadas ao carrinho de compras
│   │   ├── checkoutActions.ts      # Ações relacionadas ao checkout
│   │   ├── checkoutInfoActions.ts  # Ações relacionadas às informações de checkout
│   │   └── logoutActions.ts        # Ações relacionadas ao sair do sistema
│   │
│   └── config/                     # Configurações do projeto
│       └── configVariables.ts      # Variáveis de configuração
│
├── tests/                          # Testes automatizados
│   ├── login.spec.ts               # Testes de login
│   ├── products.spec.ts            # Testes de produtos
│   ├── cart.spec.ts                # Testes de carrinho de compras
│   ├── checkout.spec.ts            # Testes de checkout
│   ├── checkoutInfo.spec.ts        # Testes de informações do checkout
|   └── logout.spec.ts              # Testes de logout
│
├── .env.example                    # Exemplo das Variáveis de ambiente utilizadas
├── package.json                    # Definições do projeto e dependências
├── tsconfig.json                   # Configuração do TypeScript
├── playwright.config.ts            # Configuração do Playwright
└── README.md
```

## 🎉 Casos de Teste Implementados

1. **Login com credenciais válidas**:
      - Verifica se o login é realizado com sucesso utilizando um usuário e senha válidos.
   
2. **Login com credenciais inválidas**:
      - Verifica se o sistema exibe uma mensagem de erro ao tentar realizar login com credenciais inválidas.

3. **Login com credenciais vazias**:
      - Verifica se o sistema exibe uma mensagem de erro ao tentar realizar login sem credenciais.

4. **Visualizar detalhes de um produto**:
      - Testa se a página de detalhes de um produto é acessada corretamente ao clicar no nome do produto.

5. **Adicionar produto ao carrinho**:
      - Testa se um item pode ser adicionado corretamente ao carrinho.

6. **Remover produto do carrinho**:
      - Testa se um item pode ser removido do carrinho corretamente.

7. **Ordenação de produtos por preço**:
      - Testa se os produtos podem ser ordenados de forma crescente e decrescente pelo preço.

8. **Ordenação de produtos por nome**:
      - Testa se os produtos podem ser ordenados em ordem alfabética pelo nome, de A-Z ou Z-A.

9. **Acessar página de carrinho de compras**:
      - Testa se o carrinho de compras pode ser acessado corretamente.

10. **Acessar página de checkout**:
      - Testa se a página de checkout pode ser acessada corretamente.

11. **Validar informações de checkout**:
      - Verifica se é possível prosseguir com sucesso, no checkout, ao validar informações como nome, sobrenome e código postal.

12. **Invalidar informações de checkout**:
      - Verifica se o sistema exibe uma mensagem de erro ao tentar prosseguir com o checkout sem inserir as informações solicitadas.

13. **Logout**:
      - Valida o sucesso da solicitação ao sair do sistema.


## 🕹️ Como Rodar os Testes

Para rodar os testes, basta executar o seguinte comando:

`npm run test`

## 📉 Relatórios de Cobertura

Para gerar um relatório de cobertura de código, execute:

`npm run test:coverage`

A cobertura de código será exibida no terminal e os relatórios detalhados estarão disponíveis na pasta `coverage/lcov-report/index.html`.

- Resultados dos testes:

   ![Cobertura de testes](./src/assets/Captura%20de%20tela%202025-03-20%20100623.png)

#### Desenvolvido por [Beatriz Ribeiro](https://github.com/Biiars00) 👩🏾‍💻