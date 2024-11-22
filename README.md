# 🚗⚡️ **Configurador de Recargas para Carros Elétricos com Energia Renovável**

---

## 🛠️ **Tecnologias Utilizadas**

- **Frontend**: React.js (JavaScript)
- **Backend**: Node.js com Express
- **Banco de Dados**: SQLite
- **Arquitetura**: MVC (Model-View-Controller)

---

## 📡 **Endpoints da API**

### **Autenticação de Usuário**

- **POST** `/users/register`  
  Requisição: `{ "username": string, "password": string }`  
  Descrição: Registra um novo usuário com nome de usuário e senha.

- **POST** `/users/login`  
  Requisição: `{ "username": string, "password": string }`  
  Descrição: Realiza login de um usuário.

- **GET** `/users/{idUser}`  
  Descrição: Obtém as informações do usuário pelo ID.

- **PATCH** `/users/{idUser}/preferences`  
  Requisição: `{ "preferenciaTipoRecarga": string, "preferenciaHorario": string }`  
  Descrição: Atualiza as preferências do usuário quanto ao tipo de recarga e horário de preferência.

---

### **Configuração de Recargas**

- **GET** `/recargas/{idUser}`  
  Descrição: Obtém o histórico de recargas de um usuário.

- **POST** `/recargas`  
  Requisição: `{ "horaInicio": string, "nomeCarro": string, "tipoRecarga": string, "idUser": number }`  
  Descrição: Cria uma nova recarga para um usuário com horário, nome do carro e tipo de recarga preferido.

---

## 💡 **Princípios de Design do Sistema**

Seguindo as **heurísticas de Nielsen**, garantimos uma experiência de usuário intuitiva e agradável:

- **Visibilidade do Status do Sistema**  
  O sistema fornece feedback em tempo real sobre o status das recargas e preferências do usuário.

- **Compatibilidade com o Mundo Real**  
  Utilizamos termos e conceitos familiares ao usuário, como horários e tipos de energia renovável, para tornar a interação mais natural.

- **Controle e Liberdade do Usuário**  
  Oferecemos opções para desfazer ou cancelar ações de forma clara e acessível.

- **Consistência e Padrões**  
  Mantemos uma interface consistente e intuitiva, onde os elementos se comportam da mesma forma em toda a aplicação.

- **Reconhecimento em vez de Memorização**  
  Todas as opções e ações são visíveis para reduzir a carga de memória do usuário.

- **Estética e Design Minimalista**  
  Exibimos apenas as informações essenciais, garantindo uma interface limpa e sem sobrecarga de dados.

---

## 🚀 **Como Rodar o Projeto**

### **Pré-requisitos**

- **Node.js** (versão 14 ou superior)
- **NPM** (ou Yarn)


### **Passos para Execução**

1. Clone o repositório:
   git clone https://github.com/vinicius-domingues/Energood.git


2. Instale as dependências do frontend e backend:


3. Execute o backend:
- npm install
- node server.js


4. Execute o Frontend
- npm install
- npm start

---

## 🏗️ Estrutura do Projeto

### Frontend (React)
- **Model**: O estado da interface e as interações com a API são gerenciados através de componentes React.
- **View**: Os componentes React que renderizam a interface do usuário, como páginas de login, cadastro e agendamento de recargas.
- **Controller**: Lógica para gerenciar as ações do usuário e a comunicação com a API para registrar usuários, salvar preferências e agendar recargas.

### Backend (Node.js/Express)
- **Model**: Representa os dados do usuário e as recargas armazenadas no banco de dados SQLite.
- **View**: O backend não exibe diretamente a interface, mas retorna dados no formato JSON que o frontend consome.
- **Controller**: Lógica para registrar usuários, autenticar, salvar preferências de recarga e gerenciar o agendamento de recargas.

## 🧑‍💻 Princípios de Usabilidade
A aplicação segue os princípios de usabilidade, garantindo uma navegação simples e intuitiva:

- **Feedback constante**: A interface sempre informa ao usuário o que está acontecendo, como o status da recarga.
- **Simples e direto**: Apenas o essencial é exibido, sem elementos ou informações desnecessárias.
- **Ações fáceis de desfazer**: O usuário pode facilmente cancelar ou modificar suas preferências e agendamentos.

## 🌱 Conclusão
Este aplicativo visa facilitar o processo de recarga de carros elétricos, utilizando fontes de energia renováveis e promovendo a sustentabilidade. Através da combinação de React no frontend e Node.js no backend, oferecemos uma experiência de usuário rápida e responsiva, enquanto o banco de dados SQLite garante uma solução de armazenamento leve e eficiente.

Para mais informações sobre o React e o Node.js, consulte as respectivas documentações:

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Node.js](https://nodejs.org/en/docs/)


