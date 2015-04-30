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

var _ = _yod._;
_.moment = require('moment');

// 设置 def 的默认配置
def.option('applySelf', true);


// 重新定义下 yod，让它支持 sprintf
function yod(any) {
  if (_.isString(any)) {
    var args = _.slice(arguments, 1);
    any = any.replace(/%([dsf])/g, function(r, flag) {
      var rep = args.shift();
      if (_.isUndefined(rep)) { return r; }
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
yod.type('Lodash', function() { return _.apply(_, arguments); }, '_');


/****** build_delete_start ******/
var path = require('path');
var datadir = path.join(__dirname, 'data');

require('fs').readdirSync(datadir).forEach(function(name) {
  var key = name.split('.').shift();
  yod.config('system.' + key, require(path.join(datadir, name)));
});

// 加载 helper
require('./useful/helper')(yod, def, _);

// 加载 modifiers
require('./modifiers/basic')(yod, def, _);

// 加载 types
require('./mocks/basic')(yod, def, _);
require('./mocks/text')(yod, def, _);
require('./mocks/media')(yod, def, _);
require('./mocks/user')(yod, def, _);
require('./mocks/web')(yod, def, _);
require('./mocks/location')(yod, def, _);
require('./mocks/mixed')(yod, def, _);

/****** build_delete_end ******/

module.exports = yod;
