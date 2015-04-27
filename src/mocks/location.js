/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _, helper) {

  yod.type('Country', def(function(abbr) {
    return _.sample(yod.config('system.location').country)[abbr ? 1 : 0];
  }));

  yod.type('Province', def(function() {
    return _.sample(yod.config('system.location').region).split(' ').pop();
  }), 'Region');

  yod.type('Area', def(function() {
    return _.sample(yod.config('system.location').area);
  }));

  //yod.type('City', def(function() {}));
  //yod.type('Street', def(function() {}));

  yod.type('Latitude', def(function() {
    /**
     * @rules ([Int fixed = 5, [Int min = -90, Int max = 90]]) -> Float
     */
    return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);

  }));
  yod.type('Longitude', def(function() {
    /**
     * @rules ([Int fixed = 5, [Int min = -180, Int max = 180]]) -> Float
     */
    return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);
  }));

  yod.type('Coordinates', def(function() {
    return yod('@Latitude @Longitude');
  }));
};
