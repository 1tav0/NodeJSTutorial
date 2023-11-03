const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("welcome to my home page");
  }
  if (req.url === '/about') {
    res.end("Here is our about page");
  }
  res.end(`
    <h1>Ooops!</h1>
    <p>Page Does not exist</p>
    <a href='/'> back home </a>
    `)
})

server.listen(5000);