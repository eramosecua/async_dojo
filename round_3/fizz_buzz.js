"use strict";

var fs = require('fs');
var map = require('../round_1/fizz_buzz.js');
var _ = require('underscore');
var Q = require('q');

function main_async (){
  var deferred = Q.defer();
  var results = [];

  return get_list_files_async()
  .then(function (files) {
    _(files).each(function (file) {
      get_map_to_fizz_buzz(file)
      .then(function (data) {
        results.push(data);
        if(files.length === results.length) {
          deferred.resolve(results);
        }
      })
    });

    return deferred.promise;
  })
}

function get_list_files_async () {
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

function get_map_to_fizz_buzz (file) {
  var deferred = Q.defer();
  var filepath = __dirname + '/input_files/'+file;

  fs.readFile(filepath, 'utf8', function (error, lines) {
    if (error) {
      deferred.reject(error);
    }

    var data = JSON.parse(lines);
    deferred.resolve(map.execute(data));
  })

  return deferred.promise;
}

module.exports = {
  execute_async: function () {
    return  main_async();
  }
};
