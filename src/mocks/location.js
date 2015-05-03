/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  /*------------------------------------------------------------------
   ----------------------  Country     -------------------------
   ------------------------------------------------------------------*/
  yod.type('Country', def(function(abbr) {
    return _.sample(yod.config('system.location').country)[abbr ? 1 : 0];
  }));


  /*------------------------------------------------------------------
   ----------------------  Province & Regiion     -------------------
   ------------------------------------------------------------------*/
  yod.type('Province & Region', def(function() {
    return _.sys('location.region').split(' ').pop();
  }));


  /*------------------------------------------------------------------
   ----------------------  Area     -------------------------
   ------------------------------------------------------------------*/
  yod.type('Area', def(function() {
    return _.sys('location.area');
  }));

  //yod.type('City', def(function() {}));
  //yod.type('Street', def(function() {}));


  /*------------------------------------------------------------------
   ----------------------  Latitude     -------------------------
   ------------------------------------------------------------------*/
  yod.type('Latitude', def(function() {
    /**
     * @rules ([Int fixed = 5, [Int min = -90, Int max = 90]]) -> Float
     */
    return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);

  }));

  /*------------------------------------------------------------------
   ----------------------  Longitude     -------------------------
   ------------------------------------------------------------------*/
  yod.type('Longitude', def(function() {
    /**
     * @rules ([Int fixed = 5, [Int min = -180, Int max = 180]]) -> Float
     */
    return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);
  }));


  /*------------------------------------------------------------------
   ----------------------  Coordinates     -------------------------
   ------------------------------------------------------------------*/
  yod.type('Coordinates', def(function() {
    return yod('@Latitude @Longitude');
  }));
};
