# 🌟 Minha Primeira API Node.js - Projeto Escolar DNC 🌟

![Banner do Projeto](https://media.licdn.com/dms/image/D4D16AQHaWEyqQIXg6g/profile-displaybackgroundimage-shrink_350_1400/0/1722904748211?e=1729123200&v=beta&t=MfCOnifWcv1hpOo27mhPSd3U3ITKs85hYGTl2rX_iCU)

Bem-vindo ao repositório do projeto da minha primeira API Node.js! Este projeto foi desenvolvido como parte das aulas da escola DNC, onde aprendemos a criar e gerenciar APIs usando Node.js. Aqui, você encontrará todos os detalhes sobre como configurar, executar e contribuir para o projeto.

## 📚 Sobre o Projeto

Este projeto é uma API de lista de tarefas (to-do list) que permite criar, atualizar, excluir e visualizar tarefas. É uma aplicação simples, mas poderosa, que demonstra os conceitos básicos de desenvolvimento de APIs com Node.js.

## 🚀 Funcionalidades

- **Criar Tarefa**: Adicione novas tarefas à sua lista.
- **Atualizar Tarefa**: Modifique detalhes de tarefas existentes.
- **Excluir Tarefa**: Remova tarefas que já foram concluídas.
- **Visualizar Tarefas**: Veja todas as suas tarefas em um só lugar.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express.js**: Framework para construção de APIs.
- **JavaScript**: Linguagem de programação utilizada.

## 📝 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:
/nome-do-repositorio
│
├── /controller
│ ├── commandController.js
│ └── queryController.js
│
├── /routes
│ └── tasks.js
│
├── /data
│ └── tasks.js
│
├── package.json
├── README.md
└── server.js
- **/controller**: Contém os controladores que gerenciam a lógica de criação, atualização, exclusão e consulta de tarefas.
- **/routes**: Define as rotas da API e mapeia para os métodos dos controladores.
- **/data**: Armazena os dados das tarefas.
- **server.js**: Arquivo principal que inicia o servidor Express.

## 🔍 Exemplos de Uso

### Criar uma Nova Tarefa

Para criar uma nova tarefa, envie uma requisição `POST` para `/api/tasks` com o seguinte corpo:

```json
{
  "title": "Estudar Node.js",
  "description": "Revisar conceitos de middleware e roteamento",
  "dueDate": "2024-08-20",
  "completed": false
}
```
Consulte todas as rotas do Postman dentro do diretorio Collections.

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/silveiratalita/DNC-day-node-js.git
   ```
   
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a API
   ```bash
   npm run dev

   
## 📚 Recursos Adicionais

- [Documentação do Node.js](https://nodejs.org/en/docs/)
- [Documentação do Express.js](https://expressjs.com/)

## 📧 Contato

Para mais informações ou dúvidas, entre em contato pelo e-mail: [silveira.tacristina@gmail.comm](mailto:@gmail.com.br)

---

![Rodapé do Projeto](https://via.placeholder.com/800x100.png?text=Obrigado+por+ter+participado+dessa+aula!)
