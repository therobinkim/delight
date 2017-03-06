var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var utils = require('./utils');
var middleware = require('./middleware');

const PORT = process.env.PORT || 9999;

app.use(bodyParser.json());
app.use(middleware.logger);

app.get('/', function(request, response) {
  response.send({
    message: 'received'
  });
});

app.post('/api/hashCode', function(request, response) {
  var {message, max} = request.body;
  if (message === undefined || typeof max == 'number' && max <= 0) {
    response.sendStatus(400);
  }
  response.send({
    hash: utils.hashCode(message, max)
  });
});

app.listen(PORT, function() {
  console.log(`${Date()} Listening on port ${PORT}!`);
});
