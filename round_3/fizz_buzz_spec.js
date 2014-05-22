"use strict";

describe('kata fizz buzz round_3', function () {
  var api;
  var _ = require('underscore');

  beforeEach(function () {
    api = require('./fizz_buzz.js');
  });

  it('should return promises ', function (done) {
    api.execute_async()
    .then(function (data, error) {
      expect(data.length).toBe(3);
      expect(data).toContain([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz']);
      expect(data).toContain(['buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 'Luinix_for_president', 'fizzbuzz']);
      expect(data).toContain([ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ]);
      done();
    })
    .catch(function (error) {
      done(error);
    });
  });
});
