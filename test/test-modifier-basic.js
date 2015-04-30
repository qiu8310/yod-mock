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

describe('yod modifier basic', function() {

  context('repeat', function() {
    it('should return random 1-10 items', function() {
      yod('@Bool.repeat').length.should.within(1, 10);
    });

    it('should return specified length items', function() {
      yod('@Bool.repeat(3)').length.should.eql(3);
    });

    it('should join items', function() {
      yod('@(a).repeat(2, "")').should.eql('aa');
    });
  });

  context('index', function() {
    it('should get array index item', function() {
      yod('@([1,2,3]).index()').should.eql(1);
      yod('@([1,2,3]).index(1)').should.eql(2);
      yod('@([1,"2",3]).index(1)').should.eql('2');
    });

    it('should get string index char', function() {
      yod('@(abc).index(2)').should.eql('c');
      yod('@(dad).index(1)').should.eql('a');
    });

    it('should not work on other type', function() {
      yod('@(2).index(0)').should.eql(2);
    });
  });

  context('stringify', function() {
    it('should call JSON.stringify', function() {
      yod('@(ab).stringify').should.eql('"ab"');
      yod('@([a,b]).stringify').should.eql('["a","b"]');
    });
  });
  context('title', function() {
    it('should work', function() {
      yod('@("ab bc").title').should.eql('Ab Bc');
    });
  });
  context('cap', function() {
    it('should work', function() {
      yod('@("ab bc").cap').should.eql('Ab bc');
    });
  });
  context('upper', function() {
    it('should work', function() {
      yod('@("ab bc").upper').should.eql('AB BC');
    });
  });
  context('lower', function() {
    it('should work', function() {
      yod('@("aB Bc").lower').should.eql('ab bc');
    });
  });

  context('lodash', function() {
    it('should use lodash function', function() {
      [1,2,3].should.containEql(yod('@([1, 2, 3]).sample'));
    });
  });

});
