/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var yod = require('..');
var assert = require('should');

// Use defined modifier

assert.equal(yod('@(abc).upper'), 'ABC');


// Use lodash modifier

assert.deepEqual(yod('@([a, a, b, b]).uniq'), ['a', 'b']);


// Use native js modifier

assert.equal(yod('@(abc).toUpperCase'), 'ABC');


//-----------------------------------------------

// Define a normal modifier

yod.modifier('foo', function(lastValue) {
  if (typeof lastValue === 'string') {
    return lastValue.replace('foo', '');
  }
  return lastValue;
});


// Define a pre-filter modifier

yod.modifier('String', 'bar', function(lastValue) {
  return lastValue.replace('bar', '');
});


// Define a pre-hook modifier

yod.modifier(':foobar', function(lastGenerator) {
  var val = lastGenerator();

  if (typeof val === 'string') {
    return val.replace('foobar', '');
  }

  return val;
});
