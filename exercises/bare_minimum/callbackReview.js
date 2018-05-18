/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, data)=>{
    if(err){
      callback(err);
    } else {
      var newData = data.toString().split('\n');
      console.log(newData[0]);
      callback(err, newData[0]);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  https.get(url, (res)=>{
    if(res.statusCode === 200){
      callback(null, res.statusCode);
    } 
    if (res.statusCode === 404){
      var err = {message: 'Invalid URI'};
      callback(err, res.statuCode);
    }
  });
   
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
