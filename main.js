const express = require('express');
const path = require('path');
const app = express();
const PORT = 2000;

const UserRepository = require('./src/repository/user');
const UserService = require('./src/service/user');
const UserHandler = require('./src/handler/user');

app.use(express.json());
app.use(express.static('public'));

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

app.post('/register', userHandler.register);


app.listen(PORT, function () {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
  });