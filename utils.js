exports.hashCode = hashCode;
exports.leftPad = leftPad;

// http://stackoverflow.com/a/8831937/3814251
function hashCode(string, max) {
  // coerce to string if necessary
  if (!(typeof string == 'string')) {
    string = string + '';
  }

  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash = (hash << 5) - hash + string.charCodeAt(i);
    // convert to 32bit integer and make sure it stays positive
    hash = Math.abs(hash & hash);
  }
  if (typeof max == 'number' && 0 < max) {
    return hash % max;
  }
  return hash;
}

function leftPad(string, length = 0, char = ' ') {
  // coerce to string if necessary  
  if(!(typeof string == 'string')) {
    string = string + '';
  }
  var bufferLength = length - string.length;
  for(var i = 0; i < bufferLength; i++) {
    string = char + string;
  }
  return string;
}
