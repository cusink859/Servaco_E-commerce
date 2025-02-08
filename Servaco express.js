const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/online-store', { useNewUrlParser: true, useUnifiedTopology: true });

// Define models
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String
});

const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number
});

const Order = mongoose.model('Order', {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the online store!');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password: bcrypt.hashSync(password, 10) });
  user.save((err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send('User registered successfully!');
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err || !user) {
      res.status(401).send('Invalid username or password');
    } else if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' });
      res.send({ token });
    } else {
      res.status(401).send('Invalid username or password');
    }
  });
});

app.get('/products', (req, res) => {
  Product.find().then((products) => {
    res.send(products);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  Product.findById(id).then((product) => {
    res.send(product);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.post('/cart', (req, res) => {
  const { userId, productId, quantity } = req.body;
  const order = new Order({ user: userId, product: productId, quantity });
  order.save((err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send('Product added to cart successfully!');
    }
  });
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });