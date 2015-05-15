/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var yod = require('..');
var assert = require('should');


assert.equal(yod('\\@Int'), '@Int');

assert.equal(yod('${@(abc)}.length'), 'abc.length');

