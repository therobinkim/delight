var utils = require('./utils');

exports.logger = logger;

function logger(request, response, next) {
  var dateTime = new Date();
  var hours = leftPad(dateTime.getHours());
  var minutes = leftPad(dateTime.getMinutes());
  var seconds = leftPad(dateTime.getSeconds());
  var time = `${hours}:${minutes}:${seconds}`;
  console.log(`${time} ${request.method} ${request.url} ${JSON.stringify(request.body)}`);
  next();

  function leftPad(original) {
    var padded = utils.leftPad(original, 2, '0');
    return padded;
  }
}
