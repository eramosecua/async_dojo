"use strict";

var fs = require('fs');
var map = require('../round_1/fizz_buzz.js');
var _ = require('underscore');
var Q = require('q');

function main_async (callback){
  var deferred = Q.defer();
  var results = [];

  return get_list_files_async()
  .then(function (files) {
    _(files).each(function (file) {
      var filepath = __dirname + '/input_files/'+file;

      fs.readFile(filepath, 'utf8', function (error, lines) {

        if (error) {
          deferred.reject(error);
        }

        var data = JSON.parse(lines);
        results.push(map.execute(data));

        if(results.length === files.length) {
          deferred.resolve(results);
          console.log('aui...')
        }
      });
      return deferred.promise;
    });
  });
}

function get_list_files_async (callback) {
  var deferred = Q.defer();
  var filepath = __dirname + '/input_files/files_to_read';

  fs.readFile(filepath, 'utf8', function (error, lines) {
    if(error) {
      deferred.reject(error);
    }

    var data = lines.split( "\n" );
    deferred.resolve(data);
  });

  return deferred.promise;
}

module.exports = {
  execute_async: function (callback) {
    return  main_async(callback);
  }
};