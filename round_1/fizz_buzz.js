'use strict';

var _ = require('underscore');

function fizz(number) {
  if (number % 3 == 0 && number % 5 !== 0) {
    return true;
  }
  return false;
}

function buzz (number) {
  if(number % 5 == 0 && number % 3 !== 0) {
    return true;
  }
  return false;
}

function fizzbuzz(number) {
  if(number % 5 == 0 && number % 3 == 0) {
    return true;
  }
  return false;
}

module.exports = {
  execute: function (parameter) {
    var array_returned = [];

    _(parameter).each(function (number) {
      if (fizz(number)){
        array_returned.push('fizz');
      }else if (buzz(number)) {
        array_returned.push('buzz');
      }else if (fizzbuzz(number)) {
        array_returned.push('fizzbuzz');
      }else {
        array_returned.push(number);
      }
    })

    return array_returned;
  }
};
