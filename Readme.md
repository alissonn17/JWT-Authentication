# 📦 Backend - v1.0.0

Este é um projeto test backend construído com [Express](https://expressjs.com/) e suporte a autenticação via JWT. Ele utiliza variáveis de ambiente com segurança reforçada e está preparado para desenvolvimento com Babel, Jest e Supertest.

---

## 🚀 Tecnologias Utilizadas

- [Express](https://expressjs.com/) — Framework web para Node.js
- [JWT](https://jwt.io/) — Autenticação baseada em tokens
- [dotenv](https://github.com/motdotla/dotenv) + [dotenv-safe](https://github.com/rolodato/dotenv-safe) — Gerenciamento seguro de variáveis de ambiente
- [Nodemon](https://nodemon.io/) — Monitoramento de alterações no código durante o desenvolvimento
- [Jest](https://jestjs.io/) — Testes unitários
- [Supertest](https://github.com/visionmedia/supertest) — Testes de integração para APIs
- [Babel](https://babeljs.io/) — Transpilação de código moderno para compatibilidade

---

## 📁 Estrutura do Projeto

backend/
├── src/ 
│ └── index.js # Ponto de entrada da aplicação 
├── .env # Variáveis de ambiente 
├── .env.example # Exemplo de variáveis exigidas 
├── package.json # Configurações e dependências 
└── README.md # Documentação do projeto


---

## 🛠️ Scripts Disponíveis

- `npm run dev` — Inicia o servidor com Nodemon
- `npm test` — Executa os testes com Jest

---

## 🔐 Variáveis de Ambiente

Este projeto utiliza `dotenv-safe`, portanto é necessário criar um arquivo `.env` com todas as variáveis listadas em `.env.example`.

Exemplo:

```env
Port=5000
JWT_Expires=600
JWT_key=your_secret_key
````

## 🧪 Testes

Este projeto utiliza [Jest](https://jestjs.io/) e [Supertest](https://github.com/visionmedia/supertest) para garantir a qualidade e confiabilidade da aplicação.

### Como executar os testes

Execute o seguinte comando no terminal:

```bash
npm test
