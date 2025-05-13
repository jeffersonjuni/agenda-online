
# 📒 Agenda Online

Agenda Online é uma aplicação web desenvolvida com o padrão arquitetural MVC que permite aos usuários gerenciar seus contatos de forma segura e prática. A aplicação utiliza MongoDB como banco de dados, EJS como motor de visualização e implementa funcionalidades completas de autenticação e gerenciamento de contatos.

---

## 🚀 Funcionalidades

✅ Cadastro e login de usuários com senhas protegidas de forma segura no MongoDB

✅ Criação, visualização, edição e exclusão de contatos na agenda pessoal

✅ Interface dinâmica e organizada utilizando EJS

✅ Estrutura baseada em MVC (Model-View-Controller)

---

## 🔒 Segurança

As senhas dos usuários são protegidas utilizando `bcryptjs` antes de serem armazenadas no banco de dados. A autenticação de sessão é feita com `express-session` e os dados da sessão são armazenados de forma segura no MongoDB.

---

## 📦 Como executar localmente

Siga os passos abaixo para executar o projeto em sua máquina local:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/agenda-online.git
   cd agenda-online
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`**

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   CONNECTIONSTRING=mongodb+srv://<seu-usuario>:<sua-senha>@<cluster>.mongodb.net/agenda
   PORT=3000
   ```

4. **Execute a aplicação**

   ```bash
   npm start
   ```

5. **Acesse no navegador**

   ```
   http://localhost:3000
   ```

---

## 📸 Demonstração

1. **Tela de Login**
   ![tela de login](https://github.com/user-attachments/assets/2b2b54f8-b2e8-49bb-b56a-cdac748a7a68)
   O ponto de entrada da aplicação. O usuário insere suas credenciais para acessar a agenda.

2. **Tentativa de Login com Senha Inválida**
   [https://github.com/user-attachments/assets/0c40afb0-c7a4-487a-88e5-8f044397fe9e](https://github.com/user-attachments/assets/0c40afb0-c7a4-487a-88e5-8f044397fe9e)
   O sistema exibe mensagens claras ao usuário em caso de erro, como senha inválida ou campos incorretos.

3. **Validação de Senha**
   ![tela de login senha entre 3 e 50](https://github.com/user-attachments/assets/271bfda7-7a8f-4907-bb57-f7fdcea335f3)
   Durante o cadastro, o sistema valida se a senha está entre 3 e 50 caracteres, garantindo padrões mínimos de segurança.

4. **Criação e Login de Usuário**
   [https://github.com/user-attachments/assets/53fdbd2e-1189-4977-b3c8-9d3732af1920](https://github.com/user-attachments/assets/53fdbd2e-1189-4977-b3c8-9d3732af1920)
   Demonstração completa do fluxo de criação de conta e login com usuário novo.

5. **MongoDB – Visualização de Login Salvo**
   ![tela usuario 4 adicionado no mongoDB](https://github.com/user-attachments/assets/970f9e72-9c65-4da6-93c2-0ee7387b521b)
   Após o cadastro, os dados (com a senha protegida) são salvos com segurança no MongoDB.

6. **MongoDB – Contatos do Usuário**
   ![tela 2 mongoDB contatos](https://github.com/user-attachments/assets/94302124-6108-497f-9985-4a0aba4d1c29)
   Visualização da coleção de contatos associados ao usuário autenticado.

7. **Tela da Agenda**
   ![tela usuario1 de ola](https://github.com/user-attachments/assets/8f49a8c5-131f-42c0-9328-0d6626c6777b)
   ![tela de agenda usuario 1](https://github.com/user-attachments/assets/bb5e80e7-01db-4749-ac34-9047e9537464)
   Página principal após o login, onde o usuário pode ver todos os contatos cadastrados.

8. **Tela de Cadastrar e Editar Contato**
   ![tela de cadastrar e editar contato](https://github.com/user-attachments/assets/6a58a05a-a11a-42fa-8eb9-dbee5dd6ac96)
   O usuário pode facilmente adicionar, editar e excluir contatos da sua agenda.

---

## 👨‍💻 Autor

**Jefferson Junior** – [GitHub](https://github.com/jeffersonjuni)

---
