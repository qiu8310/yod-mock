/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _, helper) {

  /*------------------------------------------------------------------
   ---------------  Picture & Pic & Image & Img  ---------------------
   ------------------------------------------------------------------*/

  yod.type('Picture', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */
    return helper.sysConfig('picture', {category: this.category});
  }), 'Pic', 'Image', 'Img');

  /*------------------------------------------------------------------
   ----------------------  Audio & Mp3  -------------------------
   ------------------------------------------------------------------*/


  yod.type('Audio', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */

    return helper.sysConfig('audio', {category: this.category});
  }), 'Mp3');

  /*------------------------------------------------------------------
   ----------------------  Video & Mp4  -------------------------
   ------------------------------------------------------------------*/


  yod.type('Video', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */

    return helper.sysConfig('video', {category: this.category});

  }), 'Mp4');

};
