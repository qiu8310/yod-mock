/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var yod = require('..');

// Use defined type

yod('@Int');

yod('@Int(1, 10)');

yod('@Id(seed)');

yod('@Id(seed2)');


// Define a new type ( 4 ways )

yod.type('Foo', function() {
  return yod._.sample(['f', 'o', 'o']);
});

yod.type('Bar', '@Foo.repeat(10).uniq');

yod.type('Obj', {
  foo: '@Foo',
  bar: '@Bar',
  barSample: '@Self.bar.sample'
});

yod.type('Ary', [
  '@Foo', '@Bar.join(-)'
]);
