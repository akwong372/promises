/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, func) {
  // TODO
  fs.readFile( filePath, 'utf8', function(err, content) {
    if (err) {
      func(err);
    } else {
      //console.log(content.split(/\r/)[0]);
      func(err, content.split(/\r/)[0]);
    }
  });


};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, func) {
  // TODO
  request(url, function(err, content) {
    if (err) {
      func(err);
    } else {
      func(err, content.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
