var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var utils = require('./utils');
var middleware = require('./middleware');

const PORT = process.env.PORT || 9999;

app.use(bodyParser.json());
app.use(middleware.logger);

app.all('/', function(request, response) {
  response.json({
    body: request.body,
    hostname: request.hostname,
    ip: request.ip,
    method: request.method,
    path: request.path,
    protocol: request.protocol,
    query: request.query,
    secure: request.secure,
    subdomains: request.subdomains,
    time: Date.now(),
    url: request.originalUrl,
    xhr: request.xhr
  });
});

app.post('/api/hashCode', function(request, response) {
  var {message, max} = request.body;
  if (message === undefined || typeof max == 'number' && max <= 0) {
    response.sendStatus(400);
  }
  response.json({
    hash: utils.hashCode(message, max)
  });
});

app.listen(PORT, function() {
  console.log(`${Date()} Listening on port ${PORT}!`);
});
