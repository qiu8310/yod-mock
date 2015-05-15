/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  yod.type('Boolean & Bool', def(function() {
    /**
     * Generate a random boolean value.
     *
     * @name Boolean
     * @alias Bool
     *
     * @rule ([Number probability = 0.5]) -> Boolean
     * @rule (String percentage) -> Boolean
     *
     * @example
     *
     * // Ten percent's probability return true
     * @Bool(0.1);
     * @Bool('10%');
     */

    return _.prob(this.$has('probability') ? this.probability : this.percentage);

  }));

  yod.type('Double & Float', def(function() {
    /**
     *
     * Generate a random float value.
     *
     * __Note: when you specified format to `2`, you may get a random value `0.10`, and the last `0` will be ignored, so you will get `0.1` eventually.__
     *
     * @name Double
     * @alias Float
     *
     * @defaults {min: 0, max: 1, format: '1-4'}
     *
     * @rule ([[Number max], [String format]]) -> float
     * @rule (Number min, Number max, [String format]) -> float
     * @rule (Number min, Number max, Number format) -> float
     *
     * @example
     *
     * @Float('2');       // generate value likes: 0.34
     * @Float(5, '1-3');  // generate value likes: 3.215 or 2.1 or 4.23
     * @Float(8, 9, '1'); // generate value likes: 8.2
     *
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

    // 最后几位如果是 0，精度会丢失
    return parseFloat(result);
  }));



  yod.type('Integer & Int', def(function() {
    /**
     * Generate a random integer between `min` to `max` (include `min` and `max`).
     *
     * @name Integer
     * @alias Int
     * @rule ([[Integer min = 0, ] Integer max = 1000]) -> Integer
     *
     * @example
     *
     * @Int();          // return a integer between 0 - 1000
     * @Int(10);        // return a integer between 0 - 10
     * @Int(10, 100);   // return a integer between 10 - 100
     *
     */
    return _.random(this.min, this.max);
  }));


  yod.type('Number', def(function() {
    /**
     *
     * Generator a random number value (can be a random float or integer value).
     *
     * @name Number
     * @rule () -> Number
     */
    return _.prob() ? yod('@Double') : yod('@Integer');

  }));


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
  yod.config('system.character', chars, {category: 'alpha'});

  // define
  yod.type('Character & Char', def(function() {
    /**
     *
     * Generate a random character.
     *
     * Available pre-defined pools: `vowel`, `hash`, `consonant`, `lower`, `upper`, `number`, `symbol`, `alpha` and `all`
     *
     * - If parameter `pool` not in pre-defined pools, then itself will become a characters pool.
     * - You can set `useAsPool` to `true` to force pre-defined pool key words to become a normal characters pool.
     *
     * @name Character
     * @alias Char
     * @rule ([String pool = 'alpha' [, Boolean useAsPool = false]]) -> Char
     *
     * @example
     *
     * @Char('vowel');        // will return random character in 'aeiou'
     * @Char('vowel', true);  // will return random character in 'vowel'
     *
     */

    if (chars[this.pool] && !this.useAsPool) {
      return _.sys('character', {category: this.pool});
    }

    return _.sample(this.pool);

  }));


  yod.type('String & Str', def(function() {
    /**
     * Generate a random string.
     *
     * - you can specified the string's character generate pool
     * - you can specified string length by setting `length` argument
     * - you can set `min` and `max` to get a random length string which length is between `min` to `max`
     *
     * @name String
     * @alias Str
     *
     * @defaults {min: 2, max: 20}
     *
     * @rule ([String pool = 'alpha' ] ) -> string
     * @rule ([String pool = 'alpha' ,] int length) -> string
     * @rule ([String pool = 'alpha' ,] int min, int max) -> string
     */
    var length = this.$has('length') ? this.length : _.random(this.min, this.max);

    return yod('@Char("%s").repeat(%d, "")', this.pool, length);
  }));


  function toIntJSDate(key, relative, otherwise) {
    key = String(key);
    // 1410715640.579, 1410715640, 1410715640579
    if (/^(\d{10})\.?(\d{1,3})?$/.test(key)) {
      var s = RegExp.$1, ms = RegExp.$2 || 0;
      return (s - 0) * 1000 + (ms - 0);
    } else if (/^-?[\d.]+$/.test(key)) {
      var float = parseFloat(key);
      return _.isNaN(float) ? otherwise : relative + float * 1000;
    } else {
      var d = (new Date(key)).getTime();
      if (_.isNaN(d)) {
        return otherwise;
      }
      return d;
    }
  }

  yod.type('Date', def(function() {
    /**
     * Generate a random timestamp or formatted date.
     *
     * Caller                             |  Description
     * ---------------------------------  | ----------------
     * @Date()                            | last ten year's random timestamp
     * @Date(0)                           | last ten year to next ten year's random timestamp
     * @Date(-2)                          | last two year's timestamp
     * @Date(3)                           | next three year's timestamp
     * @Date(-1, 3600)                    | next one hour's timestamp
     * @Date("3600", "7200")              | next one hour to next two hour's timestamp
     * @Date("2011-1-1", "2011-12-31")    | between 2011-1-1 00:00:00 to 2011-12-31 00:00:00
     *
     *
     * Default format is timestamp, you can specified date format in the first argument, for example:
     *
     * `@Date('YYYY-MM-DD HH:mm:ss', -2)`
     *
     * __Date format reference：http://momentjs.com/docs/#/displaying/format/__
     *
     * @name Date
     *
     * @defaults {format: timestamp}
     *
     * @rule ([String format,] [Integer flag = -10, [Nature range]]) -> String
     * @rule ([String format,] String from, String to) -> String
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
      return _.moment(random).format(this.format);
    }
  }));



  yod.type('Range', def(function() {
    /**
     * Generate a specified integer range.
     *
     * @name Range
     *
     * @defaults {start: 0, stop: 10, step: 1}
     *
     * @rule () -> Array
     * @rule (Integer stop) -> Array
     * @rule (Integer start, Integer stop) -> Array
     * @rule (Integer start, Integer stop, Integer step) -> Array
     */

    return _.range(this.start, this.stop, this.step);
  }));


  var seqSeeds = {};
  yod.type('Id & Sequence & Seq', def(function() {
    /**
     * Generate a rand auto increment id.
     *
     * @name Id
     * @alias Sequence
     * @alias Seq
     *
     * @rule ([String seed = '_d'], [Integer start = 1 [, Integer step = 1]]) -> int
     */

    if (!(this.seed in seqSeeds)) {
      seqSeeds[this.seed] = this.start;
      return this.start;
    }

    seqSeeds[this.seed] += this.step;
    return seqSeeds[this.seed];

  }));




  yod.type('Guid & GUID & Uuid & UUID', def(function() {
    /**
     *
     * Generate a random [guid](http://zh.wikipedia.org/wiki/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6)
     *
     * __format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx__
     *
     *    - x is replaced with a random hexadecimal digit from 0 to f
     *    - y is replaced with a random hexadecimal digit from 8 to b
     *
     * @name Guid
     * @alias GUID
     * @alias Uuid
     * @alias UUID
     *
     * @rule () -> string
     *
     */

    /* jshint ignore:start */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    /* jshint ignore:end */

  }));


  yod.type('Objectid & ObjectId & Oid', def(function() {

    /**
     * Generate a random [object id](http://docs.mongodb.org/manual/reference/object-id/)
     *
     * @name Objectid
     * @alias ObjectId
     * @alias Oid
     * @rule () -> string
     */

    return yod('@Char(hash).repeat(24, "")');

  }));



  yod.type('Md5 & MD5', def(function() {

    /**
     * Generate a random md5 encrypted value.
     *
     * @name Md5
     * @alias MD5
     * @rule () -> string
     */

    return yod('@Char(hash).repeat(32, "")');

  }));
};

