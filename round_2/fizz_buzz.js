"use strict";

var fs = require('fs');
var map = require('../round_1/fizz_buzz.js');
var _ = require('underscore');
var results = [];

function asyn(arg, callback ){
    callback.execute(arg);
}


function read_file (callback) {
  var files_to_read = __dirname + '/input_files/files_to_read';
  var file = __dirname + '/input_files/file_a';

  //fs.readFile(files_to_read, 'utf8', function (error, file) {
  (function(c){
   fs.readFile(file, 'utf8', function (error, lines) {
      var data = JSON.parse(lines);
      c(error, map.execute(data));
    })
  //});
   })(callback);
}

function join_results(lines, callback){
  var data = JSON.parse(lines);
  results.push(map.execute(data));
  callback(error, results);
}

module.exports = {
  execute_async: function (callback) {
    read_file(callback);
  }
};