/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var nodeStyle = require('./callbackReview.js');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  var func = new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, content) {
      if (err) {
        reject(err);
      } else {
        //console.log(content.split(/\r/)[0]);
        resolve(content.split(/\n/)[0]);
      }
    });
  });

  return func;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var func = new Promise(function (resolve, reject) {
    request(url, function (err, content) {
      if (err) {
        reject(err);
      } else {

        resolve(content.statusCode);
      }
    });
  });

  return func;

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
