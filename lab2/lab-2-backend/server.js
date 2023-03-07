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
  } else {
    // Handle other requests here
    res.statusCode = 404;
    res.end('Not found')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
