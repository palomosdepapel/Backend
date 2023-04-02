// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database');
const Product = require('./models/product');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Obtener todos los productos
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Obtener un producto por su ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Crear un nuevo producto
app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

