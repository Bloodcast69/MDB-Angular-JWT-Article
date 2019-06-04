const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const TODOS = [
  {id: 1, userId: 1, name: 'Get Milk', completed: false},
  {id: 2, userId: 2, name: 'Fetch kids', completed: true},
  {id: 3, userId: 3, name: 'Buy flowers for wife', completed: false},
  {id: 4, userId: 4, name: 'Go to shopping', completed: false},
];

const USERS = [
  {id: 1, username: 'john', password: 'password'},
  {id: 2, username: 'michael', password: 'password'},
  {id: 3, username: 'bob', password: 'password'},
];

function getTodos(userID) {
  return TODOS.filter(todo => todo.userId === userID);
}

function getTodo(todoID) {
  return TODOS.find(todo => todo.id === todoID);
}

function getUsers() {
  return USERS;
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('MDB Angular JWT Article');
});

app.get('/api/todos', (req, res) => {
  res.type('json');
  console.log(getTodos(1));
  res.send(getTodos(1));
});

app.get('/api/todos/:id', (req, res) => {
  const todoID = req.params.id;
  res.type('json');
  res.send(getTodo(todoID));
});

app.get('/api/users', (req, res) => {
  res.type('json');
  res.send(getUsers());
});

app.listen(4000, () => {
  console.log('MDB Angular JWT Article App listening on port 4000!');
});
