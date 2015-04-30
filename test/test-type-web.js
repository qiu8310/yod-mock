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

describe('yod type web', function () {
  context('@Color', function() {
    it('should work', function() {
      _.times(10, function() {
        yod('@Color').should.match(/^#[0-9A-F]{6}$/);
        yod('@Color(short)').should.match(/^#[0-9A-F]{3}$/);
        yod('@Color(rgb)').should.match(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
      });
    });
  });

  context('@Domain', function() {
    it('should work', function() {
      _.times(10, function() {
        yod('@Domain').should.match(/^(\w+\.)+\w+$/);
      });
    });
  });

  context('@Email', function() {
    it('should work', function() {
      _.times(20, function() {
        yod('@Email').should.match(/^[^@]+@(\w+\.)+\w+$/);
      });
    });
  });

  context('@Ip & @IP', function() {
    it('should work', function() {
      _.times(10, function() {
        yod('@Ip').should.match(/^(\d{1,3}\.){3}\d{1,3}$/);
        yod('@IP').should.match(/^(\d{1,3}\.){3}\d{1,3}$/);
      });
    });
  });

  context('@Ipv6 & @IPv6 & @IPV6', function() {
    it('should work', function() {
      _.times(10, function() {
        yod('@Ipv6').length.should.above(0);
        yod('@IPv6').length.should.above(0);
        yod('@IPV6').length.should.above(0);
      });
    });
  });
});
