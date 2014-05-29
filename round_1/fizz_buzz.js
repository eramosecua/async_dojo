'use strict';

var _ = require('underscore');

function fizz(number) {
  return (number % 3 === 0 && number % 5 !== 0);
}

function buzz (number) {
  return (number % 5 === 0 && number % 3 !== 0);
}

function fizzbuzz(number) {
  return (number % 5 === 0 && number % 3 === 0);
}

module.exports = {
  convert: function (number_list) {
    var array_returned = [];

    _(number_list).each(function (number) {
      if (fizz(number)){
        array_returned.push('fizz');
      }else if (buzz(number)) {
        array_returned.push('buzz');
      }else if (fizzbuzz(number)) {
        array_returned.push('fizzbuzz');
      }else {
        array_returned.push(number);
      }
    });

    return array_returned;
  }
};
