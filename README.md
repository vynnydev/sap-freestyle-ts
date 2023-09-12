[![SAP](https://img.shields.io/badge/SAP-233BA4)
[![TypeScript](https://img.shields.io/badge/TypeScript-182769)
[![Clean Architecture](https://img.shields.io/badge/Clean%20Architecture-18691E)
[![ReactJS](https://img.shields.io/badge/ReactJS-1A779F)]

# **SAP Fullstack - TypeScript | React - Caso de uso para gerenciar cliente**

[![alt text](./docs/web/react-sap-app.gif "Aplicação WEB")]

---

## [**Link para o curso completo**](https://www.udemy.com/course/react-com-mango/?referralCode=552F88858EAE76346C8B)

Sistema SAP de gerenciamento de clientes.

O objetivo do desse software é providenciar métricas mais assertivas para uma determinada empresa ou somente para uma pessoa. Também foi pensado nos programadores ao ser baseado nos princípios do Clean Code, tornando um código fácil de prover manutenção e também de desenvolver, tanto para o programador iniciante. Brevemente, este software tem como base ferramentas e metodologias consolidadas como o ReactJs, utilizando os novos Hooks, Recoil, com uma arquitetura bem definida e desacoplada, com Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID, DRY, YAGNI, KISS e aplicando Design Patterns para resolver alguns problemas comuns.
<br /><br />

---
[![alt text](./docs/architecture/clean-architecture.jpg "Clean Architecture")]

## Contribua com esse Projeto <3
<a href='https://ko-fi.com/M4M265FO6' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

<br />

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/vynnydev/sap-ui5-fiori-freestyle
cd /apps/web/sap
npm install

Execute a aplicação:
  npm start
```

### Back-end

O back-end desse projeto é construído em Core Data Services (CDS) e ExpressJS com TypeScript, mais especificamente sua versão LTS.
```sh
ATENÇÃO: no diretório root desse repositorio, no terminal gitbash (contém alguns comandos linux):

COMANDOS:
 npm install
 npm run start:sap (localhost//:4004)

Se o banco de dados sqlite não for criado, execute: npm run deploy:db
 ```

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

> ## Princípios

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance
* Small Commits

> ## Design Patterns

* Factory
* Adapter
* Decorator
* Dependency Injection

> ## Metodologias e Designs

* Clean Architecture
* DDD
* Reactive Programming
* Responsive Layout
* Conventional Commits
* GitFlow
* Modular Design
* Use Cases
* Continuous Integration
* Continuous Delivery
* Continuous Deployment

> ## Tech Stack

**📱 Front:**

- [SAP](https://www.sap.com/brazil/cmp/dg/br-best-run-business/index.html?campaigncode=crm-ya23-int-2034152&source=ppc-br-google_ads-text_ad-71700000108164121-58700008324030543-brandvoice_xsolutionarea-new_april_2023_br-x-x&gclid=Cj0KCQjwmICoBhDxARIsABXkXlIRmq5QAbsZ1QyfVJAHri7Ib-zhuN2ge4K414xdhSJFHoQpLA1ibisaAvx7EALw_wcB&gclsrc=aw.ds)
- [Core Data Services (CDS)](https://cap.cloud.sap/docs/node.js/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [SQLite](https://www.sqlite.org/index.html)
- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Zod](https://zod.dev/)
- [Recoil](https://recoiljs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [UI5 Web Components for React](https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Router DOM](https://reactrouter.com/en/main)
- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Rocketseat Eslint](https://github.com/Rocketseat/eslint-config-rocketseat)
- [Craco](https://craco.js.org/)


> ## Features do React

* Functional Components
* UseState
* UseContext
* UseEffect
* UseHistory
* UseParams
* Custom Hooks
* UseRecoilState
* UseResetRecoilState
* UseRecoilValue
* UseRecoilSetState
* Atom
* Router
* Memo

> ## Features do Git

* Alias
* Log Personalizado
* Branch
* Reset
* Amend
* Tag
* Tag Anotada
* Stash
* Rebase
* Merge
* Add
* Commit
* Push
* Pull
* Shortlog
* Status

> ## Features do Typescript

* POO Avançado
* Interface
* Type Alias
* Module
* Utility Types
* Modularização de Paths (Craco)
* Build

## Funcionalidades 🚀

Até o momento, este projeto tem funcionalidades basicas.

### Funcionalidades 1.0 (MVP):

- [ ] **Visualizar detalhadamente cada cliente da base de dados**

### Funcionalidades 2.0:

- [ ] **Corrigir o erro do modal para a edição dos clientes**
- [ ] **Autenticação**
- [ ] **Sistema de Checkout**
- [ ] **Testes Integrados**
- [ ] **Mais funcionalidades com CDS SAP**
- [ ] **Deploy na AWS com Lambda e Terraform**

### Novas Funcionalidades no projeto sap-ui5-fiori-freestyle
- [sap-ui5-fiori-freestyle] => https://github.com/vynnydev/sap-ui5-fiori-freestyle

### Made by vynnydev (Vinicius Prudencio) 🚀