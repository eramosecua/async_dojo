"use strict";

describe('kata fizz buzz round_2', function () {
  var api;
  var _ = require('underscore');

  beforeEach(function () {
    api = require('./fizz_buzz.js');
  });

  it('should  ', function (done) {
    api.execute_async(function (error, data) {
      expect(data.length).toBe(3);
      //expect(_.filter(data, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'])).toBe(true);



      if(error) {
        done('error inesperado');
      }

      done();
    });

  });
});