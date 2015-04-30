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

describe('yod', function() {

  it('yod function', function() {
    yod('%s %d %f %s', 'a', '12', '1.5').should.eql('a 12 1.5 %s');
    yod(123).should.eql(123);
    yod(true).should.eql(true);
  });

  it('lodash type', function() {
    [1, 2].should.containEql(yod('@_([1, 2]).value.sample'))
  });

});
