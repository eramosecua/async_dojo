"use strict";

var fs = require('fs');
var map = require('../round_1/fizz_buzz.js');
var _ = require('underscore');
var results = [];

function main_async (callback){
  var result = [];

  get_list_files_async(function (files) {
    _(files).each(function (file) {
      var pathfile = __dirname + '/input_files/'+file;

      fs.readFile(pathfile, 'utf8', function (error, lines) {
        var data = JSON.parse(lines);
        results.push(map.execute(data));
        if(results.length == files.length) {
          console.log(results);
          callback(error, results);
        }
      })

    })
  })
}

function get_list_files_async (callback) {
  var list_files = [];
  var filepath = __dirname + '/input_files/files_to_read';
  fs.readFile(filepath, 'utf8', function (error, lines) {
    var uno = lines.split( "\n" );
    callback(uno);
  })
}

module.exports = {
  execute_async: function (callback) {
    main_async(callback);
  }
};