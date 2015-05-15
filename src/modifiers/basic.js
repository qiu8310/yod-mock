/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  yod.modifier(':repeat', def(function repeat () {
    /**
     *
     * Repeat last generator
     *
     *
     * @defaults {min: 1, max: 10}
     *
     * @rules ( Function genFn, Integer min, Integer max [, String join] ) -> *
     * @rules ( Function genFn, Integer length [, String join] ) -> *
     * @rules ( Function genFn [, String join] ) -> *
     *
     * @example
     *
     * yod('@Bool.repeat(2)')       // => some thing like: [true, false]
     * yod('@Int.repeat(3, "-")')   // => some thing like: "20-3-12"
     */

    var length = this.$has('length') ? this.length : _.random(this.min, this.max);
    var gen = this.genFn;

    var result = _.times(length, gen);

    // self.join 可能等于空字符串
    return this.$has('join') ? result.join(this.join) : result;
  }));


  yod.modifier('index', def(function index() {
    /**
     * Get indexed item in an array or indexed character in a string
     *
     * @rules ( * arg [, Integer i = 0] ) -> *
     *
     * @example
     *
     * yod('@([1, 2, 3]).index(2)');  // => 3
     * yod('@(abc).index(2)');        // => 'c'
     */
    if (_.isArray(this.arg)) {
      return this.arg[this.i];
    }

    if (_.isString(this.arg)) {
      return this.arg.charAt(this.i);
    }

    return this.arg;
  }));

  yod.modifier('stringify', def(function stringify(obj) {
    /**
     * Call JSON.stringify on obj
     *
     * @rule (* obj) -> string
     */
    return JSON.stringify(obj);
  }));

  yod.modifier('String', 'title', def(function title(str) {
    /**
     * Upper case first letter in every word
     *
     * @rule (string str) -> string
     */
    return str.replace(/\b\w/g, function(letter) { return letter.toUpperCase(); });
  }));

  yod.modifier('String', 'cap', def(function cap(str) {
    /**
     * Upper case first letter in str
     *
     * @rule (string str) -> string
     */
    return str.charAt(0).toUpperCase() + str.substr(1);
  }));


  yod.modifier('String', 'upper', def(function upper(str) {
    /**
     *
     * Upper case all letters in str
     *
     * @rule (string str) -> string
     */

    return str.toUpperCase();
  }));

  yod.modifier('String', 'lower', def(function lower(str) {

    /**
     * Lower case all letters in str
     *
     * @rule (string str) -> string
     */

    return str.toLowerCase();
  }));


  // load lodash modifiers
  _.each(_.keys(_), function(key) {
    if (yod.isModifierNameValid(key) && !yod.isModifierNameExists(key)) {
      yod.modifier(key, function() {
        return _[key].apply(_, arguments);
      });
    }
  });

};
