# 🔐 Auth System

Sistema de autenticação Full Stack desenvolvido com **React** no frontend e **Spring Boot** no backend.

O projeto foi desenvolvido para praticar autenticação, segurança de APIs, JWT, integração entre frontend e backend e persistência de usuários em banco de dados.

<p align="left">
  <img src="https://img.shields.io/badge/Java-21-orange?logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?logo=jsonwebtokens&logoColor=white" />
</p>

---

## 🖥️ Demonstração

### 🔑 Tela de Login

![Tela de Login](docs/login.png)

### 📝 Tela de Cadastro

![Tela de Cadastro](docs/register.png)

### 🏠 Dashboard

![Dashboard](docs/protecteArea.png)

---

## 🚀 Tecnologias utilizadas

### Backend

- Java 21
- Spring Boot
- Spring Security
- JWT
- BCrypt
- Spring Data JPA
- Hibernate
- PostgreSQL

### Frontend

- React
- Vite
- Axios
- CSS

---

## 🔐 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login
- ✅ Autenticação utilizando JWT
- ✅ Criptografia de senhas com BCrypt
- ✅ Rotas protegidas
- ✅ Logout
- ✅ Validação de sessão
- ✅ Tratamento de erros
- ✅ Indicador de carregamento durante requisições
- ✅ Integração entre React e Spring Boot

---

## 🏗️ Arquitetura

```text
React
   ↓
Axios
   ↓
Spring Boot
   ↓
Spring Security
   ↓
JWT
   ↓
Service
   ↓
Repository
   ↓
Banco de dados
```