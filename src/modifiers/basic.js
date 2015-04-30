/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  yod.modifier(':repeat', def(function() {
    /**
     *
     * repeat 一个 generator 指定的次数
     *
     * @defaults {min: 1, max: 10}
     *
     * @rules ( Function genFn, Integer min, Integer max [, String join] ) -> *
     * @rules ( Function genFn, Integer length [, String join] ) -> *
     * @rules ( Function genFn [, String join] ) -> *
     */

    var length = this.$has('length') ? this.length : _.random(this.min, this.max);
    var gen = this.genFn;

    var result = _.times(length, gen);

    // self.join 可能等于空字符串
    return this.$has('join') ? result.join(this.join) : result;
  }));


  yod.modifier('index', def(function() {
    /**
     * 返回指定数组或字符串指定的位置
     *
     * @rules ( * arg [, Integer i = 0] ) -> *
     */
    if (_.isArray(this.arg)) {
      return this.arg[this.i];
    }

    if (_.isString(this.arg)) {
      return this.arg.charAt(this.i);
    }

    return this.arg;
  }));

  yod.modifier('stringify', function(obj) {
    return JSON.stringify(obj);
  });


  yod.modifier('String', 'title', function(str) {
    return str.replace(/\b\w/g, function(letter) { return letter.toUpperCase(); });
  });
  yod.modifier('String', 'cap', function(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
  });
  yod.modifier('String', 'upper', function(str) {
    return str.toUpperCase();
  });
  yod.modifier('String', 'lower', function(str) {
    return str.toLowerCase();
  });


  // 复用 lodash
  _.each(_.keys(_), function(key) {
    if (yod.isModifierNameValid(key) && !yod.isModifierNameExists(key)) {
      yod.modifier(key, function() {
        return _[key].apply(_, arguments);
      });
    }
  });

};
