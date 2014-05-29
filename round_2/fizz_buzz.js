'use strict';

var fs = require('fs');
var fizzbuzz = require('../round_1/fizz_buzz.js');
var _ = require('underscore');

function main_async (callback){
  var array_returned = [];

  get_list_files_async(function (files) {
    _(files).each(function (file) {
      var filepath = __dirname + '/input_files/'+file;

      fs.readFile(filepath, 'utf8', function (error, lines) {
        var data = JSON.parse(lines);
        array_returned.push(fizzbuzz.convert(data));

        if(array_returned.length === files.length) {
          callback(error, array_returned);
        }
      });
    });
  });
}

function get_list_files_async (callback) {
  var filepath = __dirname + '/input_files/files_to_read';

  fs.readFile(filepath, 'utf8', function (error, lines) {
    var data = lines.split( '\n' );
    callback(data);
  });
}

module.exports = {
  convert_async: function (callback) {
    main_async(callback);
  }
};