const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const fs = require('fs');

app.use(cors());
app.use(express.json());

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

// POST /colors
app.post('/colors', (req, res) => {
  fs.readFile('colors.json', (err, data) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      const colors = JSON.parse(data);
      const color = {
        colorId: colors.length,
        hexString: req.body.hexString,
        rgb: req.body.rgb,
        hsl: req.body.hsl,
        name: req.body.name
      };
      colors.push(color);
      fs.writeFile('colors.json', JSON.stringify(colors), (err) => {
        if (err) {
          res.status(500).send('Server error');
        } else {
          res.send(color);
        }
      });
    }
  });
});

// PUT /colors/:colorId
app.put('/colors/:colorId', (req, res) => {
  fs.readFile('colors.json', (err, data) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      const colors = JSON.parse(data);
      const color = colors.find((color) => color.colorId === parseInt(req.params.colorId));
      if (color) {
        color.hexString = req.body.hexString;
        color.rgb = req.body.rgb;
        color.hsl = req.body.hsl;
        color.name = req.body.name;
        fs.writeFile('colors.json', JSON.stringify(colors), (err) => {
          if (err) {
            res.status(500).send('Server error');
          } else {
            res.send(color);
          }
        });
      } else {
        res.status(404).send('Color not found');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
