"use strict";

var fs = require('fs');
var map = require('../round_1/fizz_buzz.js');
var _ = require('underscore');

function main_async (callback){
  var results = [];

  get_list_files_async(function (files) {
    _(files).each(function (file) {
      var filepath = __dirname + '/input_files/'+file;

      fs.readFile(filepath, 'utf8', function (error, lines) {
        var data = JSON.parse(lines);
        results.push(map.execute(data));
        if(results.length == files.length) {
          callback(error, results);
        }
      });
    });
  });
}

function get_list_files_async (callback) {
  var filepath = __dirname + '/input_files/files_to_read';
  fs.readFile(filepath, 'utf8', function (error, lines) {
    var data = lines.split( "\n" );
    callback(data);
  });
}

module.exports = {
  execute_async: function (callback) {
    main_async(callback);
  }
};