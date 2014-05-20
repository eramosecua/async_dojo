"use strict";

describe('kata fizz buzz round_1', function () {
  var api;

  beforeEach(function () {
    api = require('./fizz_buzz.js');
  });

  it('should return same array', function () {
    var mock = [1,2,4];
    expect(api.execute(mock).length).toEqual(3);
    expect(api.execute(mock)).toEqual(mock);
  });

  it('should return fizz', function () {
    var mock = [1,2,3,4];
    var array_returned = [1,2,'fizz',4];
    expect(api.execute(mock)).toEqual(array_returned);
  });

  it('should return fizz buzz', function () {
    var mock = [1,2,3,4,5];
    var array_returned = [1,2,'fizz',4,'buzz'];
    expect(api.execute(mock)).toEqual(array_returned);
  });

  it('should return fizz buzz and fizzbuzz', function () {
    var mock = [1,2,3,4,5,7,15,20];
    var array_returned = [1,2,'fizz',4,'buzz',7,'fizzbuzz','buzz'];
    expect(api.execute(mock)).toEqual(array_returned);
  });

  it('should return throws', function () {
    var mock = [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 'Luinix_for_president', 30 ];
    var array_returned = ['buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 'Luinix_for_president', 'fizzbuzz'];
    expect(api.execute(mock)).toEqual(array_returned);

  });

});