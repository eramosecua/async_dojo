"use strict";

describe('kata fizz buzz round_2', function () {
  var api;

  beforeEach(function () {
    api = require('./fizz_buzz.js');
  });

  it('should  ', function (done) {
    api.execute_async(function (error, data) {
      expect(data.length).toBe(10);

      console.log(data);


      if(error) {
        done('error inesperado');
      }

      done();
    });

  });
});