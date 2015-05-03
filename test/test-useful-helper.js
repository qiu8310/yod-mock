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

describe('yod useful helper', function() {

  context('prob', function() {
    it('should return random boolean', function() {
      [true, false].should.containEql(_.prob());
      [true].should.containEql(_.prob(1));
      [false].should.containEql(_.prob(0));
    });

    it('should return specified item', function() {
      [1, 0].should.containEql(_.prob(0.5, 1, 0));
      [1, false].should.containEql(_.prob(0.5, 1));
      [1].should.containEql(_.prob(1, 1));
      [0].should.containEql(_.prob(0, 1, 0));
    });
  });

  context('shortCut', function() {

  });

  context('sys', function() {
    var obj;
    before(function() {
      obj = {
        a: 'ab-{{range:1-10}}',
        b: {b1: 'cd', b2: ['a', 'b']},
        c: ['c1', 'c2', 'c3'],
        d: 123,
        e: true,
        f: 'ab-{{range:001-099}}-{{range:1-100}}',
        t: {},
        s: 's123'
      };
      obj.c.prefix = 'pre-';
      obj.c.postfix = '-post';

      yod.config('system.test.sys', obj);
    });

    it('should return random char of string', function() {
      ['s', '1', '2', '3'].should.containEql(_.sys('test.sys.s'));
    });

    it('should return one random category of object', function() {
      var a1, a2;
      _.times(20, function() {
        var r = _.sys('test.sys.b');
        ['a', 'b', 'c', 'd'].should.containEql(r);
        if ('ab'.indexOf(r) >= 0) { a1 = true; }
        if ('cd'.indexOf(r) >= 0) { a2 = true; }
      });
      (a1 && a2).should.eql(true);
    });

    it('should support range string', function() {
      _.times(5, function() {
        _.sys('test.sys.a').should.match(/^ab-\d{1,2}$/);
        _.sys('test.sys.f').should.match(/^ab-\d{3}-\d{1,3}$/);
      });
    });

    it('should support config category', function() {
      _.sys('test.sys.s', {category: '*'}).should.match(/^[s123]$/);
    });

    it('should throws when config is an empty object and with category', function() {
      assert.deepEqual(_.sys('test.sys.t'), {});
      (function() { _.sys('test.sys.t', {category: '*'}); }).should.throw(/is an empty object/);
    });

    it('should should return original value if it is not string, array, object', function() {
      _.sys('test.sys.d').should.eql(123);
      _.sys('test.sys.e').should.eql(true);
    });
  });

});
