/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var yod = require('..');
var assert = require('should');


// Get config ( 2 ways ):

var goodWords = yod.config('system.word.good');

var asciiFaces = yod('@Config.system.word.face');


// Set config

yod.config('my.chars.foo', ['f', 'o', 'o']);
yod.config('my.chars.bar', ['b', 'a', 'r']);

assert.deepEqual(yod.config('my.chars'), {foo: ['f', 'o', 'o'], bar: ['b', 'a', 'r']});

