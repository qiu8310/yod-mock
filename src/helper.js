/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var f = require("sprintf-js").sprintf;
var _ = require('lodash');
var yod = require('yod');


/**
 * 如果通过这个 key ，只能在 keys 中匹配到唯一的一个值，则返回此值，否则返回 false
 *
 * @param {String} key
 * @param {Array} keys
 *
 * @example
 *
 * shortCut('e', ['en', 'zh']) // => 'en'
 * shortCut('t', ['en', 'zh']) // => false
 * shortCut('e', ['en', 'ec']) // => false
 */
function shortCut(key, keys) {
  if (!_.isString(key)) { return false; }
  keys = _.filter([].concat(keys), function(k) { return k.indexOf(key) >= 0; });
  return keys.length === 1 ? keys[0] : false;
}


module.exports = {

  /**
   *
   * 根据第一个参数 rate 的概率，随机返回第二、第三个参数
   *
   * @param {Number|String} rate
   * @param {*} [hit]
   * @param {*} [otherwise]
   * @returns {*}
   *
   * @example
   *
   * prob( 0.2 )     // 0.2  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob('30%')     // 30%  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob( 30 )      // 30%  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob( 2 )       // 100% 的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob( 0 )       // 0%   的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   */
  prob: function(rate, hit, otherwise) {
    hit = _.isUndefined(hit) ? true : hit;
    otherwise = _.isUndefined(otherwise) ? false : otherwise;


    if (/^[\d\.]+%?$/.test(rate)) {
      rate = parseFloat(rate);
      rate = Math.round(rate <= 1 ? rate * 100 : rate) % 101; // 保证 0 <= rate <= 100
    } else {
      rate = 50;  // 默认 50%
    }

    return _.sample(_.shuffle(_.range(101))) < rate ? hit : otherwise;
  },

  shortCut: shortCut,

  /**
   * 获取 yod.config 项，并按指定的规则随机返回一项
   * @param {String} key
   * @param {Object} [opts]
   * @returns {*}
   */
  sysConfig: function(key, opts) {
    var data = yod.config(f('system.%s:meta', key));
    var val = data.val, meta = data.meta || {};
    opts = opts || {};

    var cate = opts.category || meta.category, cates;
    if (cate) {
      cates = _.keys(val);
      if (!_.isString(cate) || !val[cate]) {
        cate = shortCut(cate, cates) || _.sample(cates);
      }
      val = val[cate];
    }

    // http://abc.com/{{range:1-20}}.mp3 => http://abc.com/4.mp3
    if ( _.isString(val)) {
      var isRanged = false;
      val = val.replace(/\{\{range:(\d+)\-(\d+)\}\}/, function(raw, from, to) {
        isRanged = true;
        return _.random(parseInt(from, 10), parseInt(to, 10));
      });

      if (isRanged) { return val; }
    }

    if (_.isArray(val) || _.isString(val) || _.isPlainObject(val)) {
      return _.sample(val);
    }

    return val;
  },

  /**
   * 格式化输出字符串
   *
   * @type {Function}
   *
   * @example
   *
   * helper.f('a string %s, a json %j', 'foo', {...})
   *
   * helper.f('named format %(a.b.c)', {a: {b: c}}
   *
   */
  f: f
};
