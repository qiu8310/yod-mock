# yod-mock

[![Join the chat at https://gitter.im/qiu8310/yod-mock](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/qiu8310/yod-mock?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://badge.fury.io/js/yod-mock.svg)](https://npmjs.org/package/yod-mock)
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][daviddm-url]][daviddm-image]

<!--
[![GitHub version][git-tag-image]][project-url]
[![Inline docs][doc-image]][doc-url]
[![Code Climate][climate-image]][climate-url]
-->

本项目主要用来在测试环境中生成测试数据用的，另外也可以在命令行上快速生成简单测试数据。


> __背景__
>
> - 前端程序员会因为后端没有接口数据，开发某些功能可能就不太方便
> - 而后端程序员常会被前端程序员催促给接口，给数据，但你也还没开发完时会显得他们很烦人
>
> 此工具就是希望在前后端都没有数据的情况下生成大量随机的测试数据 
>


__Features:__

* 语法简洁，学习成本低，功能强大
* 支持所有 JS 原生的函数
* 支持所有 [lodash](https://lodash.com/docs) 的函数
* 支持自定义新的 type 和 modifier
* 支持配置系统现有的数据（使用 `yod.config('system.xxx', ...)`）

[在线体验本项目的功能](http://qiu8310.github.io/yod-mock/)


<!--

// http://www.cnblogs.com/top5/archive/2011/11/08/2241349.html 全国邮编及区号

-->

## Install

### CLI

```base
npm install --global yod-mock
```

- Using `yod image` to get a random image
- Using `yod image -c` to get a random image and copy it to clipboard
- Using `yod image .repeat 10` to get 10 random images

### Node.js

```bash
npm install --save-dev yod-mock
```

### Browser

```bash
bower install --save-dev yod-mock
```

## Usage

* [Use yod config](examples/1.config.js)
* [Use yod modifier](examples/3.modifier.js)
* [Use yod type](examples/2.type.js)
* [Escape key word](examples/5.escape.js)
* [Use yod](examples/4.all.js)


__DEMO：（[Edit this demo online](http://qiu8310.github.io/yod-mock/)）__

```javascript

/*

@Self:   Current plain object
@Parent: Parent plain object
@Config: Config item

*/

// Define an `User` type
yod.type('User', {
  firstName: '@First',              // Get a random firstName
  lastName: '@Last',
  sex: '@Sex',
  fullName: '@Self.firstName @Self.lastName',  // Join current object's firstName and lastName
  nickName: '@Nick',
  chineseName: '@ChineseName',
  age: '@Age(adult)',               // Call @Age with a argument
  to100: '` 100 - @Self.age `',     // Execute javascript code
  telephone: '@Tel',
  avatar: '@Avatar',
  others: {
     words: 'Hello, my name is @Parent.fullName, you can call me @Parent.nickName.',
     bestFriends: '@Nick.repeat(2, 3).join(", ")',    // Call native array's join function
     myFirstNameLength: '@Parent.firstName.length',   // Call native string's length attribute
     favouriteLetter: '@([A, B, C]).sample'           // Call lodash sample function
  }
});

// Use `User` type to generate an object with ten users in it
console.log(yod({
    status: 'ok',
    list: '@User.repeat(10)'
}));

// or Use `User` type to generate directly array
// console.log(yod('@User.repeat(10)'));

```



## [Types](./API_TYPES.md)

<!-- API_TYPES START -->


### BASIC

* [Boolean & Bool](API_TYPES.md#boolean--bool)
* [Double & Float](API_TYPES.md#double--float)
* [Integer & Int](API_TYPES.md#integer--int)
* [Number](API_TYPES.md#number)
* [Character & Char](API_TYPES.md#character--char)
* [String & Str](API_TYPES.md#string--str)
* [Date](API_TYPES.md#date)
* [Range](API_TYPES.md#range)
* [Id & Sequence & Seq](API_TYPES.md#id--sequence--seq)
* [Guid & GUID & Uuid & UUID](API_TYPES.md#guid--guid--uuid--uuid)
* [Objectid & ObjectId & Oid](API_TYPES.md#objectid--objectid--oid)
* [Md5 & MD5](API_TYPES.md#md5--md5)

### LOCATION

* [Country](API_TYPES.md#country)
* [Province & Region](API_TYPES.md#province--region)
* [Area](API_TYPES.md#area)
* [Latitude](API_TYPES.md#latitude)
* [Longitude](API_TYPES.md#longitude)
* [Coordinates](API_TYPES.md#coordinates)

### MEDIA

* [Image & Img & Picture & Pic](API_TYPES.md#image--img--picture--pic)
* [Dummy](API_TYPES.md#dummy)
* [PlaceHold & Placehold](API_TYPES.md#placehold--placehold)
* [PlaceImg & Placeimg](API_TYPES.md#placeimg--placeimg)
* [Unsplash & Splash & U](API_TYPES.md#unsplash--splash--u)
* [Audio & Mp3 & MP3](API_TYPES.md#audio--mp3--mp3)
* [Video & Mp4 & MP4](API_TYPES.md#video--mp4--mp4)

### MIXED

* [CarType](API_TYPES.md#cartype)
* [CarImage](API_TYPES.md#carimage)

### TEXT

* [CW](API_TYPES.md#cw)
* [CS](API_TYPES.md#cs)
* [CP](API_TYPES.md#cp)
* [Word & EW](API_TYPES.md#word--ew)
* [Sentence & ES](API_TYPES.md#sentence--es)
* [Paragraph & EP](API_TYPES.md#paragraph--ep)
* [Good](API_TYPES.md#good)
* [Face](API_TYPES.md#face)

### USER

* [Gender & Sex](API_TYPES.md#gender--sex)
* [Age](API_TYPES.md#age)
* [Avatar](API_TYPES.md#avatar)
* [First & FirstName](API_TYPES.md#first--firstname)
* [Last & LastName](API_TYPES.md#last--lastname)
* [UserName & Username](API_TYPES.md#username--username)
* [Name & ChineseName](API_TYPES.md#name--chinesename)
* [Nick & NickName & Nickname](API_TYPES.md#nick--nickname--nickname)
* [Comment](API_TYPES.md#comment)
* [Telephone & Tel](API_TYPES.md#telephone--tel)

### WEB

* [Color](API_TYPES.md#color)
* [Domain](API_TYPES.md#domain)
* [Email](API_TYPES.md#email)
* [Ip & IP](API_TYPES.md#ip--ip)
* [Ipv6 & IPv6 & IPV6](API_TYPES.md#ipv6--ipv6--ipv6)

<!-- API_TYPES END -->



## [Modifiers](./API_MODIFIERS.md)

__Support all function in [lodash](https://lodash.com/docs):__

```js
yod('@([1, 2, 3]).sample');   // equal to `_.sample([1, 2, 3])`
yod('@Int.repeat(10).uniq');  // equal to `_.uniq(yod('@Int.repeat(10)'))`
```

__Support all function in native javascript:__

```js
yod('@([a, b, c]).join("-")'); // equal to `['a', 'b', 'c'].join('-')`
yod('@String.replace(a, b)');  // equal to `yod('@String').replace('a', 'b')`
```

<!-- API_MODIFIERS START -->


### BASIC

* [repeat](API_MODIFIERS.md#repeat)
* [index](API_MODIFIERS.md#index)
* [stringify](API_MODIFIERS.md#stringify)
* [title](API_MODIFIERS.md#title)
* [cap](API_MODIFIERS.md#cap)
* [upper](API_MODIFIERS.md#upper)
* [lower](API_MODIFIERS.md#lower)

<!-- API_MODIFIERS END -->



## Reference

* [yod][yod]：本项目的核心引擎（我写的）。
* [mockjs](http://mockjs.com/#)：阿里出的，也不错，但学习成本较高，也不够强大。
* [chance](http://chancejs.com/)：国外的一个 mock 库，代码很简洁，但不适合中国人用。
* [jsonfy](http://github.com/qiu8310/jsonfy)：将任意的字符串解析成 JS 里的数据，类似于 JSON.parse，但语法要求没它那么严格（我写的）。
* [sscan](http://github.com/qiu8310/sscan)：字符串分析器，很多复杂的解析用正则表达式是满足不了要求的，所以需要把字符串化分成字符来一个个解析（我写的）。
* [elegant.def](http://github.com/qiu8310/elegant.def)：优雅的定义 JS 函数，很多情况下我们定义了函数要处理参数的各种情况，用了它处理函数参数就非常简单了（我写的）。


## TODO

- 服务器版本，可以使用用户直接访问线上的 URL 就可以生成数据，而不用用户自己搭建一个服务器
- 语法更宽松，不需要写全 type 或 modifier 就能找到对应的值（支持配置）
- 发现已经有人写了服务器版本 [thx/RAP](https://github.com/thx/RAP)，值得学习下
- 设计服务端时也可以参考 [https://readme.io/](https://readme.io/) 和 [http://apiary.io/](http://apiary.io/) 和 [Netflix/falcor](https://github.com/Netflix/falcor) 和 [http://loopback.io/getting-started/](http://loopback.io/getting-started/) 和 [runscope](https://www.runscope.com/)
- [mock-node: 一个开源的简化版的 apiary](https://github.com/ianunay/mock-node)
- 国外有一个 [marak/Faker.js](https://github.com/marak/Faker.js/) 也和 mockjs、chance 类似，可以参考
- 一个很不错的 JSON 服务端 [json-server](https://github.com/typicode/json-server)，__非常不错，值得学习下__
- 美团分享的关于 Mock Server 的技术文章 [Mock Server in Action](http://tech.meituan.com/mock-server-in-action.html)

## History

[ChangeLog](CHANGELOG.md)


## License

Copyright (c) 2015 Zhonglei Qiu. Licensed under the MIT license.



[doc-url]: http://inch-ci.org/github/qiu8310/yod-mock
[doc-image]: http://inch-ci.org/github/qiu8310/yod-mock.svg?branch=master
[project-url]: https://github.com/qiu8310/yod-mock
[yod]: https://github.com/qiu8310/yod
[git-tag-image]: http://img.shields.io/github/tag/qiu8310/yod-mock.svg
[climate-url]: https://codeclimate.com/github/qiu8310/yod-mock
[climate-image]: https://codeclimate.com/github/qiu8310/yod-mock/badges/gpa.svg
[travis-url]: https://travis-ci.org/qiu8310/yod-mock
[travis-image]: https://travis-ci.org/qiu8310/yod-mock.svg?branch=master
[daviddm-url]: https://david-dm.org/qiu8310/yod-mock.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/qiu8310/yod-mock
[coveralls-url]: https://coveralls.io/r/qiu8310/yod-mock
[coveralls-image]: https://coveralls.io/repos/qiu8310/yod-mock/badge.png

