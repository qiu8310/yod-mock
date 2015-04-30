/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var yod = require('../');
var assert = require('should');
var _ = yod._;


describe('yod type location', function () {

  context('@Country', function() {
    it('should work', function() {
      yod('@Country').length.should.above(0);
      yod('@Country(true)').length.should.below(4);
    });
  });
  context('@Province & @Region', function() {
    it('should work', function() {
      yod('@Province').length.should.above(0);
      yod('@Region').length.should.above(0);
    });
  });
  context('@Area', function() {
    it('should work', function() {
      yod('@Area').length.should.above(0);
      yod('@Area').length.should.above(0);
    });
  });

  context('@Latitude', function() {
    it('should work', function() {
      yod('@Latitude').should.instanceof(Number);
      yod('@Latitude').should.instanceof(Number);
    });
  });

  context('@Longitude', function() {
    it('should work', function() {
      yod('@Longitude').should.instanceof(Number);
      yod('@Longitude').should.instanceof(Number);
    });
  });

  context('@Coordinates', function() {
    it('should work', function() {
      yod('@Coordinates').length.should.above(0);
      yod('@Coordinates').length.should.above(0);
    });
  });

});
