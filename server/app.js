const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const app = express();

const TODOS = [
  {id: 1, userId: 1, name: 'Get Milk', completed: false},
  {id: 2, userId: 2, name: 'Fetch kids', completed: true},
  {id: 3, userId: 3, name: 'Buy flowers for wife', completed: false},
  {id: 4, userId: 4, name: 'Go to shopping', completed: false},
];

const USERS = [
  {id: 1, username: 'john'},
  {id: 2, username: 'michael'},
  {id: 3, username: 'bob'},
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
app.use(expressJwt({secret: 'my-app-super-secret-key'}).unless({path: ['/api/auth']}));
app.post('/api/auth', (req, res) => {
  const body = req.body;

  const user = USERS.find(user => user.username === body.username);
  if (!user || body.password !== 'todo') {
    return res.sendStatus(401);
  }

  const token = jwt.sign({userID: user.id}, 'my-app-super-secret-key', {expiresIn: '2h'});
  res.send({token});
});

app.get('/', (req, res) => {
  res.send('MDB Angular JWT Article');
});

app.get('/api/todos', (req, res) => {
  res.type('json');
  console.log(getTodos(req.user.userID));
  res.send(getTodos(req.user.userID));
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
