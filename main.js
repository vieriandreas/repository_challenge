const express = require('express');
const app = express();
const PORT = 2000;

// Import dependecy
// Import repository
const UserRepository = require('./src/repository/user');
const AuthRepository = require('./src/repository/auth');
const OrderRepository = require('./src/repository/order');
// Import service
const AuthService = require('./src/service/auth');
const UserService = require('./src/service/user');
const OrderService = require('./src/service/order');

// Import handler
const AuthHandler = require('./src/handler/auth');
const UserHandler = require('./src/handler/user');
const ProductRepository = require('./src/repository/product');
const ProductService = require('./src/service/product');
const ProductHandler = require('./src/handler/product');
const OrderHandler = require('./src/handler/order');

app.use(express.json());

const userRepository = new UserRepository();
const authRepository = new AuthRepository()
const authService = new AuthService(authRepository);
const authHandler = new AuthHandler(authService);

const userService = new UserService(userRepository)
const userHandler = new UserHandler(userService);

// User
app.get('/users', userHandler.getAll);

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productHandler = new ProductHandler(productService);

const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
const orderHandler = new OrderHandler(orderService);

// Auth 
app.post('/auth/login', authHandler.login);
app.post('/auth/register', authHandler.register);
app.post('/products', productHandler.insert);
app.get('/products', productHandler.getAll);
app.post('/orders', orderHandler.create);
app.get('/orders', orderHandler.getAll);
app.post('/orders/:user_id', orderHandler.updateOrderStatus);

app.use((req, res, next) => {
  res.status(404).send({
    status: "fail",
    message: "not found"
  })
});

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});

