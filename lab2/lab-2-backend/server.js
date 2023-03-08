const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Country by capital request
  if (req.url === '/country-objects/country-by-capital-city.json') {
    fs.readFile('country-objects/country-by-capital-city.json', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } 
  
  // Country by continent request
  if (req.url === '/country-objects/country-by-continent.json') {
    fs.readFile('country-objects/country-by-continent.json', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  }

  // Country by costline request
  if (req.url === '/country-objects/country-by-costline.json') {
    fs.readFile('country-objects/country-by-costline.json', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  }

  // Country by currency name request
  if (req.url === '/country-objects/country-by-currency-name.json') {
    fs.readFile('country-objects/country-by-currency-name.json', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  }

  // Country by domain tld request
  if (req.url === '/country-objects/country-by-domain-tld.json') {
    fs.readFile('country-objects/country-by-domain-tld.json', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  }

  // Country by flag request
  if (req.url === '/country-objects/country-by-flag.json') {
    fs.readFile('country-objects/country-by-flag.json', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
