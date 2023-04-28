require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const app = express();
const port = 8080;

app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
  .then(() => console.log('Mongoose Connected'))
  .catch(err => console.log(err));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Get All Products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get a Product
app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Create a Product
app.post('/products', jsonParser, async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images
  });

  await product.save();
  res.json(product);
});

// Update a Product
app.put('/products/:id', jsonParser, async (req, res) => {
  const product = await Product.findById(req.params.id);

  product.title = req.body.title;
  product.description = req.body.description;
  product.price = req.body.price;
  product.discountPercentage = req.body.discountPercentage;
  product.stock = req.body.stock;
  product.brand = req.body.brand;
  product.category = req.body.category;
  product.thumbnail = req.body.thumbnail;
  product.images = req.body.images;

  await product.save();
  res.json(product);
});

// Delete a Product
app.delete('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
