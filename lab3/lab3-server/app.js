const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

// GET /colors
app.get('/colors', (req, res) => {
  fs.readFile('colors.json', (err, data) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      res.send(data);
    }
  });
});

// GET /colors/:colorId
app.get('/colors/:colorId', (req, res) => {
  fs.readFile('colors.json', (err, data) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      const colors = JSON.parse(data);
      const color = colors.find((color) => color.colorId === parseInt(req.params.colorId));
      if (color) {
        res.send(color);
      } else {
        res.status(404).send('Color not found');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
