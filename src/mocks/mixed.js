/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  yod.config('system.car.type', [
    '奧迪', '北汽', '宾利', '宝马', '別克',
    '布加迪', '比亚迪', '雪佛兰', '法拉利',
    '福特', '通用', '本田', '红旗', '兰博基尼',
    '路虎', '玛莎拉蒂', '马自达', '保时捷', '劳斯莱斯'
  ]);

  yod.type('CarType', def(function() {
    /**
     * Generate a random car type
     *
     * _Using config `system.car.type`_
     *
     * @name CarType
     * @rule () -> string
     */
    return _.sys('car.type');
  }));



  yod.type('CarImage', def(function() {
    /**
     * Generate a random car image
     *
     * _Using config `system.picture.car`_
     *
     * @name CarImage
     * @rule () -> string
     */
    return _.sys('picture.car');
  }));

};
