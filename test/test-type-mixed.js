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


describe('yod type mixed', function () {

  context('@CarType', function() {
    it('should in config', function() {
      _.times(10, function() {
        yod.config('system.car.type').should.containEql(yod('@CarType'));
      });
    });
  });

  context('@CarImage', function() {
    it('should in config', function() {
      _.times(10, function() {
        yod.config('system.picture.car').should.containEql(yod('@CarImage'));
      });
    });
  });

});
