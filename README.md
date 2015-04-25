# yod-mock
[![NPM version](https://badge.fury.io/js/yod-mock.svg)](https://npmjs.org/package/yod-mock)
[![GitHub version][git-tag-image]][project-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-url]][daviddm-image]
[![Inline docs][doc-image]][doc-url]
[![Code Climate][climate-image]][climate-url]
[![Coverage Status][coveralls-image]][coveralls-url]


Mock data for develop environment.


[Github Repo][project-url]

[JSDOC Generated Document](http://qiu8310.github.io/yod-mock)



// http://www.cnblogs.com/top5/archive/2011/11/08/2241349.html 全国邮编及区号

// IP

// 电话号码


Random.image()
// => "http://dummyimage.com/125x125"
Random.image('200x100')
// => "http://dummyimage.com/200x100"
Random.image('200x100', '#fb0a2a')
// => "http://dummyimage.com/200x100/fb0a2a"
Random.image('200x100', '#02adea', 'Hello')
// => "http://dummyimage.com/200x100/02adea&text=Hello"
Random.image('200x100', '#00405d', '#FFF', 'Mock.js')
// => "http://dummyimage.com/200x100/00405d/FFF&text=Mock.js"
Random.image('200x100', '#ffcc33', '#FFF', 'png', '!')
// => "http://dummyimage.com/200x100/ffcc33/FFF.png&text=!"


## Install


### Node.js

```bash
npm install --save yod-mock
```

### Browser

```bash
bower install --save yod-mock
```



## Usage

```javascript
var yodMock = require('yod-mock');
yodMock(); // "awesome"
```

## API

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## Reference
* [CI Test for Browser](https://ci.testling.com/) - Run your browser tests on every push, demo project [js-traverse](https://github.com/substack/js-traverse)
* [GA on Github](https://github.com/igrigorik/ga-beacon) - Google Analytics collector-as-a-service (using GA measurement protocol).
* [idiomatic.js](https://github.com/rwaldron/idiomatic.js) - Principles of Writing Consistent, Idiomatic JavaScript
* [Use jsdoc](http://usejsdoc.org/index.html)
* [Using the ES6 transpiler Babel on Node.js](http://www.2ality.com/2015/03/babel-on-node.html)
* [Node Collection](https://github.com/npm/newww/issues/313)
  - [http://tools.ampersandjs.com/](http://tools.ampersandjs.com/)
  - [https://github.com/sindresorhus/awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)
  - [https://www.npmjs.com/package/frontend-npm-goodies](https://www.npmjs.com/package/frontend-npm-goodies)
  - [https://github.com/Raynos/http-framework/wiki/Modules#response](https://github.com/Raynos/http-framework/wiki/Modules#response)
  - [https://github.com/npm-dom](https://github.com/npm-dom)
  - [https://www.npmjs.com/package/mad-science-modules](https://www.npmjs.com/package/mad-science-modules)
  - [https://www.npmjs.com/package/npm-collection-language-tools#readme](https://www.npmjs.com/package/npm-collection-language-tools#readme)
  - And more...


## License

Copyright (c) 2015 Zhonglei Qiu. Licensed under the MIT license.



[doc-url]: http://inch-ci.org/github/qiu8310/yod-mock
[doc-image]: http://inch-ci.org/github/qiu8310/yod-mock.svg?branch=master
[project-url]: https://github.com/qiu8310/yod-mock
[git-tag-image]: http://img.shields.io/github/tag/qiu8310/yod-mock.svg
[climate-url]: https://codeclimate.com/github/qiu8310/yod-mock
[climate-image]: https://codeclimate.com/github/qiu8310/yod-mock/badges/gpa.svg
[travis-url]: https://travis-ci.org/qiu8310/yod-mock
[travis-image]: https://travis-ci.org/qiu8310/yod-mock.svg?branch=master
[daviddm-url]: https://david-dm.org/qiu8310/yod-mock.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/qiu8310/yod-mock
[coveralls-url]: https://coveralls.io/r/qiu8310/yod-mock
[coveralls-image]: https://coveralls.io/repos/qiu8310/yod-mock/badge.png

