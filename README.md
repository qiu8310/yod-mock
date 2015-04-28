# yod-mock
[![NPM version](https://badge.fury.io/js/yod-mock.svg)](https://npmjs.org/package/yod-mock)
[![GitHub version][git-tag-image]][project-url]

<!--
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-url]][daviddm-image]
[![Inline docs][doc-image]][doc-url]
[![Code Climate][climate-image]][climate-url]
[![Coverage Status][coveralls-image]][coveralls-url]
-->

本项目主要用来在测试环境中生成测试数据用的，另外也可以在命令行上快速生成简单测试数据。


> __背景__
>
> - 前端程序员会因为后端没有接口数据，开发某些功能可能就不太方便
> - 而后端程序员常会被前端程序员催促给接口，给数据，但你也还没开发完时会显得他们很烦人
>
> 此工具就是希望在前后端都没有数据的情况下生成大量随机的测试数据 
>


__主要特点：__

* 语法简洁，学习成本低，功能强大
* 支持所有 JS 原生的函数
* 支持所有 [lodash](https://lodash.com/docs) 的函数
* 支持自定义新的 type 和 modifier
* 支持配置系统现有的数据（使用 `yod.config('system.xxx', ...)`）

[在线体验本项目的功能](http://qiu8310.github.io/yod-mock/)


<!--

// http://www.cnblogs.com/top5/archive/2011/11/08/2241349.html 全国邮编及区号

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

-->

## Install


### Node.js

```bash
npm install --save-dev yod-mock
```
__如果全局安装，可以使用 `yod` 命令，在命令行上输出 mock 的数据，使用 `yod -c xxx` 可以复制生成的内容__

### Browser

```bash
bower install --save-dev yod-mock
```

## Usage


__一般只需要两步：__

- 第一步，先定义你的数据结构体 `yod.type('xxx', {...})`
- 第二步，使用你的结构体生成数据 `yod('@xxx.repeat(5, 10)')`


__DEMO：（[你可以在线查看编辑此DEMO](http://qiu8310.github.io/yod-mock/)）__

```javascript

/*

三个系统自带的功能：

@Self: 是取当前对象
@Parent: 是取当前对象的父对象
@Config: 取当前系统的配置项目

注意：数组不算是对象，只有 JS 中的 {...} 才算是对象

其它以 @ 开头的关键字都是已经定义好的类型，
如 @Nick 是随机生成一个昵称，@Mp3 是随机生成一个 mp3 文件的链接
*/

// 定义一个用户类型
yod.type('User', {
  firstName: '@First',
  lastName: '@Last',
  sex: '@Sex',
  fullName: '@Self.firstName @Self.lastName',
  nickName: '@Nick',
  chineseName: '@ChineseName',
  age: '@Age(adult)',
  to100: '` 100 - @Self.age `',
  telephone: '@Tel',
  avatar: '@Avatar',
  others: {
     words: 'Hello, my name is @Parent.fullName, you can call me @Parent.nickName.',
     bestFriends: '@Nick.repeat(2, 3).join(", ")',
     myFirstNameLength: '@Parent.firstName.length',
     favouriteLetter: '@([A, B, C]).sample'
  }
});

// 用上面的 User 结构体 重复生成 2 - 4 个 User
console.log(yod({
    status: 'ok',
    list: '@User.repeat(2, 4)'
}));

// 你也可以直接返回一个数组
// console.log(yod('@User.repeat(2, 4)'));

```


_此项目只是在 [yod][yod] 项目基础上定义了一些常用的 type 和 modifier。(type 和 modifier 的细节可以在 [yod][yod] 项目中查看)_


### Types

__有太多 types 了，我不想一个个写它的参数，其实用法都很简单；
我下面只写出支持的 types 名称，具体支持哪些参数可以去看[源代码](https://github.com/qiu8310/yod-mock/tree/master/src/mocks)__


#### 只想在最上面特别说明下 `Date` 类型：

<table>
<tr><td>@Date()</td><td>过去10年的随机 timestamp</td></tr>
<tr><td>@Date(0)</td><td>过去10年到未来10年之间的一个 timestamp</td></tr>
<tr><td>@Date(-2)</td><td>过去两年的随机 timestamp</td></tr>
<tr><td>@Date(3)</td><td>将来三年的随机 timestamp</td></tr>
<tr><td>@Date(-1, 3600)</td><td>过去 3600 分（即过去一小时）间的随机 timestamp</td></tr>
<tr><td>@Date("2011-1-1", "2011-12-31 23:59:59")</td><td>2011-1-1 00:00:00 到 2011-12-31 23:59:59 之间的随机数据</td></tr>
</table>

__上面所有生成的都是 10 位的 Unix 时间戳，这是我们在接口中常用的格式，如果你想输出其它格式，
可以在 `Date` 的第一个参数上加上格式字符串，所有支持的格式在这：[moment#format](http://momentjs.com/docs/#/displaying/format/)__

```javascript
@Date('YYYY-MM-DD HH:mm:ss', -2); // 将生成一个像 "2014-05-12 21:04:19" 一样的字符串
```

#### [BASIC](https://github.com/qiu8310/yod-mock/blob/master/src/mocks/basic.js)

* Boolean & Bool
* Double & Float
* Integer & Int
* Number
* Character & Char
* String & Str
* Date
* Range
* Sequence & Seq & Id 
* Guid & GUID & Uuid & UUID
* Objectid & Oid
* Md5 & MD5 

#### [TEXT](https://github.com/qiu8310/yod-mock/blob/master/src/mocks/text.js)

* Word & EW
* Sentence & ES
* Paragraph & EP
* CW
* CS
* CP
* Good
* Face

#### [MEDIA](https://github.com/qiu8310/yod-mock/blob/master/src/mocks/media.js)

* Picture & Pic & Image & Img
* Audio & Mp3
* Video & Mp4

#### [USER](https://github.com/qiu8310/yod-mock/blob/master/src/mocks/user.js)

* Gender & Sex
* Age
* Avatar
* First & FirstName
* Last & LastName 
* UserName
* Name & ChineseName
* Nick & NickName
* Comment
* Telephone & Tel

#### [WEB](https://github.com/qiu8310/yod-mock/blob/master/src/mocks/web.js)

* Color
* Domain
* Email
* Ip & IP
* Ipv6 & IPv6 & IPV6


#### [LOCATION](https://github.com/qiu8310/yod-mock/blob/master/src/mocks/location.js)

* Country
* Province & Region
* Area
* Latitude
* Longitude
* Coordinates

__另外还一个特殊的 Type：`Lodash`，别名 `_`，可以这么用它（不建议用它做 Type，用它做 Modifier 会非常强大）：__

```javascript
yod('@_([a, b, c]).value.sample'); // 从数组 ['a', 'b', 'c'] 中随机取出一个值来
```


__所有 Types 都是大小写敏感的，而且首字母都是大小，下一个版本打算做成不敏感，并且可以不用写全名称__

### Modifiers

#### repeat([[min,] max] [, join])

重复生成 min - max 之间某个长度的数据，min 默认值是 1， max 默认值是 10 。

如果指定了 join，会将重复生成的数据用 join 指定的字符合并起来。

__e.g__

```javascript
yod('@Bool.repeat(2)')    // => 可能生成 [true, false]
  
yod('@Int.repeat(3, "-")')  // => 可能生成 "20-3-12"
```

#### index(n)

取字符串或数组的第 n 个元素。

#### stringify

调用 JSON.stringify 生成字符串。

#### title

只适用于字符串，将字符串中每个单词的首字母大写。

#### cap

只适用于字符串，将字符串中第一个字母大写。

#### lower

只适用于字符串，将字符串中每个字母小写。

#### upper

只适用于字符串，将字符串中每个字母大写。

__另外，modifier 中加了入 [lodash](https://lodash.com/docs) 的所有功能（除了 repeat，因为我重写了它的 repeat）__



## 引用

* [yod][yod]：本项目的核心引擎（我写的）。
* [mockjs](http://mockjs.com/#)：阿里出的，也不错，但学习成功较高，也不够强大。
* [chance](http://chancejs.com/)：国外的一个 mock 库，代码很简洁，但不适合中国人用。
* [jsonfy](http://github.com/qiu8310/jsonfy)：将任意的字符串解析成 JS 里的数据，类似于 JSON.parse，但语法要求没它那么严格（我写的）。
* [sscan](http://github.com/qiu8310/sscan)：字符串分析器，很多复杂的解析用正则表达式是满足不了要求的，所以需要把字符串化分成字符来一个个解析（我写的）。
* [elegant.def](http://github.com/qiu8310/elegant.def)：优雅的定义 JS 函数，很多情况下我们定义了函数要处理参数的各种情况，用了它处理函数参数就非常简单了（我写的）。


## TODO

- 服务器版本，可以使用用户直接访问线上的 URL 就可以生成数据，而不用用户自己搭建一个服务器
- 语法更宽松，不需要写全 type 或 modifier 就能找到对应的值（支持配置）


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

