/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

'use strict';

var _yod = require('yod'),
  def = require('elegant.def');

var helper = require('./helper');
var _ = _yod._;

// 设置 def 的默认配置
def.option('applySelf', true);


// 重新定义下 yod，让它支持 sprintf
function yod(any) {
  if (_.isString(any)) {
    var args = _.slice(arguments, 1);
    any = any.replace(/%([dsf])/g, function(r, flag) {
      var rep = args.shift();
      if (rep === null) { return r; }
      if (flag === 's') {
        return String(rep);
      } else if (flag === 'd') {
        return parseInt(rep, 10);
      } else {
        return parseFloat(rep);
      }
    });
  }
  return _yod(any);
}

_.assign(yod, _yod);

// 绑定 _ 和 Lodash 到原生的 lodash
yod.type('_', function() { return arguments.length ? _.apply(_, arguments) : _; }, 'Lodash');


/****** build_delete_start ******/

var path = require('path');
var datadir = path.join(__dirname, 'data');

require('fs').readdirSync(datadir).forEach(function(name) {
  var key = name.split('.').shift();
  yod.config('system.' + key, require(path.join(datadir, name)));
});

// 加载 modifiers
require('./modifiers/basic')(yod, def, _, helper);

// 加载 types
require('./mocks/basic')(yod, def, _, helper);
require('./mocks/text')(yod, def, _, helper);
require('./mocks/media')(yod, def, _, helper);
require('./mocks/user')(yod, def, _, helper);
require('./mocks/web')(yod, def, _, helper);
require('./mocks/location')(yod, def, _, helper);
require('./mocks/mixed')(yod, def, _, helper);

/****** build_delete_end ******/

//console.log(yod('@Seq(10, 2).repeat(6)'));
//console.log(yod('@Seq'));
//console.log(yod('@Audio(short)'));
//console.log(yod('@Mp4(short)'));
//console.log(yod('@Img(avatar)'));
//console.log(yod('@Image(star)'));
//console.log(yod('@Avatar()'));
//console.log(yod('@Name(female)'));
//console.log(yod('@UserName(female)'));
//console.log(yod('@UserName(true, male)'));
//console.log(yod('@Tel'));
//console.log(yod('@Comment'));
//console.log(yod('@Nick'));
//console.log(yod('@Color'));
//console.log(yod('@Color(short)'));
//console.log(yod('@Color(rgb)'));
//console.log(yod('@Color()'));
//console.log(yod('@Domain()'));
//console.log(yod('@Sentence()'));
//console.log(yod('@Paragraph()'));
//console.log(yod('@Email()'));
//console.log(yod('@Ip()'));
//console.log(yod('@Ipv6()'));
//console.log(yod('@Country()'));
//console.log(yod('@Country(abbr)'));
//console.log(yod('@Region()'));
//console.log(yod('@Coordinates()'));
//console.log(yod('@CP()'));
//console.log(yod('@_.random(20)'));


module.exports = yod;

if (typeof window !== 'undefined') { window.yod = yod; }
