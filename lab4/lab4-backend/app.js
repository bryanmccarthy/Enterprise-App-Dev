require('dotenv').config();
const express = require('express');
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

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
