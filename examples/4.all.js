/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var yod = require('..');


// Create a type with fields which like database fields.
yod.type('User', {
  name: {
    first: '@First',
    last: '@Last'
  },
  fullName: '@Self.name.first @First @Self.name.last', // refer 'name' property
  chineseName: '@ChineseName',
  age: '@Age(adult)', // call a type with argument
  to100: '` 100 - @Self.age `', // execute javascript
  children: '@First.repeat(1, 3)', // get an array
  childrenCount: '@Self.children.length', // call js native property "length"
  favouriteChild: '@Self.children.sample', // call lodash function "sample"
  avatar: '@Avatar',
  others: {
    getSystemConfig: '@Config.system.video.hotbody.sample',
    useParent: 'My name is @Parent.name.first.',
    protection: 'Get firstName.length: ${@Parent.name.first}.length',
    escape: 'You can escape caller \\@Parent.name.first.'
  }
});


// Use the defined "User" type to create the random data.
yod({
  status: 'ok',
  users: '@User.repeat(10)'
});


