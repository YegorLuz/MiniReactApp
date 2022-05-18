const express = require('express');
const jwt = require('jsonwebtoken');
const FileReader = require('./FileReader');
const app = express();

const SECRET_KEY = '_secret_key';
const EXPIRATION = 60 * 60 * 24;

app.use((req, res, next) => {
  console.log(req.path, req.headers);
  try {
    jwt.verify('', SECRET_KEY);
  } catch (error) {
    console.log('wrong token', error);
  }
  next();
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const users = FileReader.getUsers();
  console.log(users);
  const token = jwt.sign(users[0], SECRET_KEY, { algorithm: 'RS256', expiresIn: 60 });
});

app.listen(3333, () => {
  console.log('Started - PORT:3333');
});