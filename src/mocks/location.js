/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {


  yod.type('Country', def(function(abbr) {
    /**
     * Generate a random country in world
     *
     * - setting `abbr` to `true` to return the country's shorthand name
     *
     * _Using config `system.location.country`_
     *
     * @name Country
     * @rule ([bool abbr = false]) -> string
     */
    return _.sample(yod.config('system.location').country)[abbr ? 1 : 0];
  }));


  yod.type('Province & Region', def(function() {
    /**
     * Generate a random province in China
     *
     * _Using config `system.location.region`_
     *
     * @name Province
     * @alias Region
     * @rule () -> string
     */
    return _.sys('location.region').split(' ').pop();
  }));



  yod.type('Area', def(function() {
    /**
     *
     * Generate a random area in China
     *
     * _Using config `system.location.area`_
     *
     * @name Area
     * @rule () -> string
     */
    return _.sys('location.area');
  }));

  //yod.type('City', def(function() {}));
  //yod.type('Street', def(function() {}));



  yod.type('Latitude', def(function() {
    /**
     * Generate a random latitude float value
     *
     * @name Latitude
     *
     * @rule ([Int fixed = 5, [Int min = -90, Int max = 90]]) -> Float
     */
    return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);

  }));



  yod.type('Longitude', def(function() {
    /**
     * Generate a random longitude float value
     *
     * @name Longitude
     * @rule ([Int fixed = 5, [Int min = -180, Int max = 180]]) -> Float
     */
    return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);
  }));




  yod.type('Coordinates', def(function() {
    /**
     * Generate a random coordinates
     *
     * @name Coordinates
     * @rule () -> string
     */
    return yod('@Latitude @Longitude');
  }));
};
