# Blog-Dev

<img src="/imgs/blog-dev-picture.png" alt="blog-dev" style="width: 600px; height: 500px;">

## link do projeto em produção

https://blog-dev-t22g.onrender.com

## Descrição

Este é um projeto fullstack de um blog onde os usuários podem criar uma conta, fazer login, ler, criar e deletar artigos. O backend foi desenvolvido em Node.js utilizando a arquitetura limpa. Além disso, foram implementados testes automatizados usando o Jest. O frontend foi construído com Vue.js e Bootstrap. O banco de dados utilizado foi o PostgreSQL.

## Tecnologias Utilizadas

Backend:
- TypeScript
- Node.js
- Express.js
- PostgreSQL
- Prisma
- Arquitetura Limpa (Clean Architecture)
- Jest (para testes automatizados)

Frontend:
- TypeScript
- Vue.js
- Vite
- Bootstrap

## Funcionalidades

- Autenticação: Os usuários podem criar uma conta e fazer login.
- Gerenciamento de Artigos: Os usuários autenticados podem criar novos artigos, visualizar os artigos existentes e excluir os artigos que criaram.

## Backend

A pasta backend contém todo o código relacionado ao servidor Node.js. A estrutura do backend segue os princípios da Arquitetura Limpa para garantir uma separação clara de responsabilidades e facilitar a manutenção e expansão do sistema. Os testes automatizados estão localizados na pasta tests dentro do diretório do backend.

## Frontend

O código do frontend está localizado na pasta frontend. Aqui, você encontrará todos os componentes Vue.js utilizados para criar a interface do usuário do blog.

## Como Executar o Projeto Localmente

1. Clone o repositório do projeto.
2. Instale as dependências do backend e do frontend: cd nome-do-repositorio, npm install.
3. Crie um banco de dados PpstgreSQL.
4. Entre na pasta backend substitua as informações que estão no arquivo ".env" pelas credenciais do seu banco de dados. 
5. Gere as migrations usando o comando: npx prisma migrate dev --name init.
7. Inicie o servidor backend e frontend com o comando: npm run dev.

## Contribuindo

Se você deseja contribuir com este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.
