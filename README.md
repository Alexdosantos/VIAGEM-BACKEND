# 🛠️ Viagem Backend - API com Express, Prisma e TypeScript

Projeto backend construído com **Express**, **TypeScript** e **Prisma** para gerenciamento de dados, incluindo configuração de CORS e organização via `tsconfig-paths`.  
Possui scripts para desenvolvimento, build e testes.

---

## 🧰 Tecnologias e Dependências

- **[Node.js](https://nodejs.org/)** — Ambiente de execução (recomenda-se v22.18.0).
- **[Express 5](https://expressjs.com/)** — Framework web para API REST.
- **[TypeScript](https://www.typescriptlang.org/)** — Superset de JavaScript com tipagem estática.
- **[Prisma](https://www.prisma.io/)** — ORM para banco de dados relacional.
- **[Cors](https://github.com/expressjs/cors)** — Middleware para habilitar CORS.
- **[tsconfig-paths](https://github.com/dividab/tsconfig-paths)** — Resolução de paths customizados no TypeScript.
- **[tsup](https://tsup.egoist.dev/)** — Bundler para build otimizado.
- **[tsx](https://github.com/esbuild-kit/tsx)** — Execução e watch para 

### Dependências Principais

| Pacote           | Versão   | Finalidade                             |
|------------------|----------|--------------------------------------|
| @prisma/client   | ^6.13.0  | Cliente ORM para banco de dados       |
| express          | ^5.1.0   | Framework para construção da API      |
| cors             | ^2.8.5   | Habilitação de CORS                   |
| tsconfig-paths   | ^4.2.0   | Suporte a caminhos customizados TS   |
| typescript       | ^5.9.2   | Tipagem estática                      |
| tsup             | ^8.5.0   | Bundler para build                    |
| txc              | ^0.0.1   | Utilitário TS (específico do projeto)|

### Dependências de Desenvolvimento

| Pacote          | Versão   | Finalidade                            |
|-----------------|----------|-------------------------------------|
| tsx             | ^4.20.3  | Executor e watch para TS             |
| @types/express  | ^5.0.3   | Tipos para Express                   |
| @types/cors     | ^2.8.19  | Tipos para CORS                     |

---

## 🔑 Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis conforme seu banco e ambiente:

```env
#Variáveis de Deepgram
DEEPGRAM_API_KEY=your_deepgram_api_key_here

#Variáveis de banco de dados LOCAL (Se estiver usando o banco local)
DATABASE_URL="postgresql://postgres:SEU_SENHA@localhost:5432/SEU_BANCO_DE_DADOS?schema=public"

#Variáveis de banco de dados DOCKER (Se estiver usando o banco docker)
POSTGRES_USER= SEU_USUARIO
POSTGRES_PASSWORD=SEU_SENHA
POSTGRES_DB=SEU_BANCO_DE_DADOS

```

### Usando projeto

Se estiver usando o banco local
```bash
npm install
```
```bash
npx prisma generate
```

```bash
npm run start:dev
```

### Usando docker
```bash
docker-compose up -d
```
