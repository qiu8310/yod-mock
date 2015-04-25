/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var moment = require('moment');

module.exports = function(yod, def, _, helper) {

  /*------------------------------------------------------------------
   ----------------------  Boolean & Bool     -------------------------
   ------------------------------------------------------------------*/

  yod.type('Boolean', def(function() {
    /**
     * 生成一个布尔值
     *
     * @rules ([Number probability = 0.5]) -> Boolean
     * @rules (String percentage) -> Boolean
     */

    return helper.prob(this.$has('probability') ? this.probability : this.percentage);

  }), 'Bool');


  /*------------------------------------------------------------------
   ----------------------  Double & Float  -------------------------
   ------------------------------------------------------------------*/

  yod.type('Double', def(function() {
    /**
     * @defaults {min: 0, max: 1, format: '1-4'}
     *
     * @rules ([Number max, [String format]]) -> string
     * @rules (Number min, Number max, [String format]) -> string
     * @rules (Number min, Number max, Number format) -> string
     */
    var result = _.random(this.min, this.max, true);

    // 如果 format 设置不规范，就使用 1-10 模式，设置 '-5' => '1-5', '5-' => '5-10', '5' => '5-5'
    var dMin = 1, dMax = 10;

    var format = String(this.format).split('-').slice(0, 2);
    if (format.length < 2) { format.unshift(format[0]); }

    format = _.map(format, function(n, i) {
      var r = parseInt(n, 10);
      return _.isNaN(r) ? (i ? dMax : dMin) : r;
    });

    result = result.toFixed(_.random(format[0], format[1]));
    return parseFloat(result);

  }), 'Float');



  /*------------------------------------------------------------------
   ----------------------  Integer & Int     -------------------------
   ------------------------------------------------------------------*/

  yod.type('Integer', def(function() {
    /**
     * 生成一个从 min 到 max 之间的整数（包括 min 和 max）
     *
     * @rules ([[Integer min = 0, ] Integer max = 1000]) -> Integer
     */
    return _.random(this.min, this.max);
  }), 'Int');


  /*------------------------------------------------------------------
   ----------------------    Number    -------------------------
   ------------------------------------------------------------------*/
  yod.type('Number', def(function() {
    /**
     * 随机生成一个浮点数或者整数
     *
     * @rules () -> Number
     */
    return helper.prob() ? yod('@Double') : yod('Integer');

  }));

  /*------------------------------------------------------------------
   ----------------------  Character & Char  -------------------------
   ------------------------------------------------------------------*/

  // config
  var chars = {
    vowel: 'aeiou',
    hash: '0123456789abcdef',
    consonant: 'bcdfghjklmnpqrstvwxyz',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*()[]'
  };
  chars.alpha = chars.lower + chars.upper + chars.number;
  chars.all = chars.alpha + chars.symbol;

  // 使用 yod.config 的目的是使的用户可以修改这些默认的值
  yod.config('system.basic.character', chars, {category: 'alpha'});

  // define
  yod.type('Character', def(function() {
    /**
     * @rules ([String pool = 'alpha' [, Boolean useAsConfigKey = true]]) -> Char
     */
    if (this.pool && (!chars[this.pool] || !this.useAsConfigKey)) {
      return _.sample(this.pool);
    }

    return helper.sysConfig('basic.character', {category: this.pool});

  }), 'Char');


  /*------------------------------------------------------------------
   ----------------------  String & Str      -------------------------
   ------------------------------------------------------------------*/

  yod.type('String', def(function() {
    /**
     * @defaults {min: 2, max: 20}
     *
     * @rules ([String pool = 'alpha' ] ) -> string
     * @rules ([String pool = 'alpha' ,] int length) -> string
     * @rules ([String pool = 'alpha' ,] int min, int max) -> string
     */
    var length = this.$has('length') ? this.length : _.random(this.min, this.max);

    return yod('@Char("%s", true).repeat(%d, "")', this.pool, length);
  }), 'Str');


  /*------------------------------------------------------------------
   ----------------------       Date         -------------------------
   ------------------------------------------------------------------*/

  function toIntJSDate(key, relative, otherwise) {
    if (_.isUndefined(key)) { return otherwise; }

    key = String(key);

    // 1410715640.579, 1410715640, 1410715640579
    if (/^(\d{10})\.?(\d{1,3})$/.test(key)) {
      var s = RegExp.$1, ms = RegExp.$2 || 0;
      return (s - 0) * 1000 + (ms - 0);
    } else if (/^-?[\d.]+$/.test(key)) {
      var float = parseFloat(key);
      return _.isNaN(float) ? otherwise : relative + float * 1000;
    } else {
      var m = moment(key);
      if (m.isValid()) {
        return m.valueOf();
      }
      return otherwise;
    }
  }

  yod.type('Date', def(function() {
    /**
     * 生成随机的 timestamp 日期
     *
     * @Date()    => 过去10年的随机 timestamp
     * @Date(0)   => 过去10年到未来10年之间的一个 timestamp
     * @Date(-2)  => 过去两年的随机 timestamp
     * @Date(3)   => 将来三年的随机 timestamp
     * @Date(-1, 3600)  => 过去一小时的随机 timestamp
     * @Date("3600", "7200")  => 将来两小时的随机 timestamp
     * @Date("2011-1-1", "2011-12-31 23:59:59") => 2011-1-1 00:00:00 到 2011-12-31 23:59:59 之间的随机数据
     *
     * 另外可以在上面所有的方法的参数首位加上 format 参数来指定返回的格式（默认是返回 10 位的 timestamp)，如
     * @Date('YYYY-MM-DD HH:mm:ss', -2)
     *
     * 格式字符串参考：http://momentjs.com/docs/#/parsing/string-format/
     * @defaults {format: timestamp}
     *
     * @rules ([String format,] [Integer flag = -10, [Nature range]]) -> String
     * @rules ([String from, [String to]]) -> String
     * @rules ([String format,] String from, String to) -> String
     *
     */
    var from, to, now = new Date().getTime(), oneYearMs = 3600000 * 24 * 365;

    if (this.$has('flag')) {
      var flag = this.flag;
      var range = this.$has('range') ? this.range * 1000 : Math.abs(flag || 10) * oneYearMs;

      from = flag > 0 ? now : now - range;
      to = flag < 0 ? now : now + range;
    } else {
      from = toIntJSDate(this.from, now, now - oneYearMs);
      to = toIntJSDate(this.to, now, now + oneYearMs);
    }

    var random = _.random(from, to);
    if (this.format === 'timestamp') {
      return Math.round(random / 1000);
    } else if (this.format === 'jsTimestamp') {
      return Math.round(random);
    } else {
      return moment(random).format(this.format);
    }
  }));



  /*------------------------------------------------------------------
   ----------------------        Range       -------------------------
   ------------------------------------------------------------------*/

  yod.type('Range', def(function() {
    /**
     * @defaults {start: 0, step: 1}
     *
     * @rules (Integer stop) -> Array
     * @rules (Integer start, Integer stop) -> Array
     * @rules (Integer start, Integer stop, Integer step) -> Array
     */

    return _.range(this.start, this.stop, this.step);
  }));



  /*------------------------------------------------------------------
   ----------------------  Sequence & Seq & Id  ----------------------
   ------------------------------------------------------------------*/

  var seqSeeds = {};
  yod.type('Sequence', def(function() {
    /**
     * @rules ([String seed = '_d'], [Integer start = 1 [, Integer step = 1]]) -> int
     */

    if (!(this.seed in seqSeeds)) {
      seqSeeds[this.seed] = this.start;
      return this.start;
    }

    seqSeeds[this.seed] += this.step;
    return seqSeeds[this.seed];

  }), 'Seq', 'Id');


  /*------------------------------------------------------------------
   ------------------ Guid & GUID & Uuid & UUID ----------------------
   ------------------------------------------------------------------*/

  yod.type('Guid', def(function() {
    /**
     * @format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
     *    x is replaced with a random hexadecimal digit from 0 to f
     *    y is replaced with a random hexadecimal digit from 8 to b
     *
     * @rules () -> string
     *
     * @reference http://zh.wikipedia.org/wiki/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6
     */

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

  }), 'GUID', 'Uuid', 'UUID');


  /*------------------------------------------------------------------
   ----------------------  Objectid & Oid    -------------------------
   ------------------------------------------------------------------*/
  yod.type('Objectid', def(function() {

    /**
     * Mongo 的 id
     *
     * @rules () -> string
     */

    return yod('@Char(hash).repeat(24, "")');

  }), 'Oid');


  /*------------------------------------------------------------------
   ----------------------  Md5 & MD5    -------------------------
   ------------------------------------------------------------------*/

  yod.type('Md5', def(function() {

    /**
     * 生成 md5 字符串
     *
     * @rules () -> string
     */

    return yod('@Char(hash).repeat(32, "")');

  }), 'MD5');
};

