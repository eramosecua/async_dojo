'use strict';

describe('kata fizz buzz round_2', function () {
  var fizzbuzz;

  beforeEach(function () {
    fizzbuzz = require('./fizz_buzz.js');
  });

  it('should  ', function (done) {
    fizzbuzz.convert_async(function (error, data) {
      expect(data.length).toBe(3);
      expect(data).toContain([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz']);
      expect(data).toContain(['buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 'Luinix_for_president', 'fizzbuzz']);
      expect(data).toContain([ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ] );

      if(error) {
        done('error inesperado');
      }

      done();
    });

  });
});