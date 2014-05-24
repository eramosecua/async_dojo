'use strict';

var fs = require('fs');
var fizzbuzz = require('../round_1/fizz_buzz.js');
var _ = require('underscore');
var Q = require('q');

function main_async (){
  var deferred = Q.defer();
  var array_returned = [];

  return get_files_list_async()
  .then(function (files) {
    _(files).each(function (file) {
      convert_to_fizz_buzz(file)
      .then(function (data) {
        array_returned.push(data);

        if(files.length === array_returned.length) {
          deferred.resolve(array_returned);
        }
      });
    });

    return deferred.promise;
  });
}

function get_files_list_async () {
  var deferred = Q.defer();
  var filepath = __dirname + '/input_files/files_to_read';

  fs.readFile(filepath, 'utf8', function (error, lines) {
    if(error) {
      deferred.reject(error);
    }

    var data = lines.split( '\n' );
    deferred.resolve(data);
  });

  return deferred.promise;
}

function convert_to_fizz_buzz (file) {
  var deferred = Q.defer();
  var filepath = __dirname + '/input_files/'+file;

  fs.readFile(filepath, 'utf8', function (error, lines) {
    if (error) {
      deferred.reject(error);
    }

    var data = JSON.parse(lines);
    deferred.resolve(fizzbuzz.convert(data));
  });

  return deferred.promise;
}

module.exports = {
  convert_async: function () {
    return  main_async();
  }
};
