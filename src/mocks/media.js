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

  yod.config('system.media.picture', require('../data/picture'));

  yod.type('Picture', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */
    return helper.sysConfig('media.picture', {category: this.category});
  }), 'Pic', 'Image', 'Img');

  /*------------------------------------------------------------------
   ----------------------  Audio & Mp3  -------------------------
   ------------------------------------------------------------------*/

  yod.config('system.media.audio', require('../data/audio'));

  yod.type('Audio', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */

    return helper.sysConfig('media.audio', {category: this.category});
  }), 'Mp3');

  /*------------------------------------------------------------------
   ----------------------  Video & Mp4  -------------------------
   ------------------------------------------------------------------*/

  yod.config('system.media.video', require('../data/video'));

  yod.type('Video', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */

    return helper.sysConfig('media.video', {category: this.category});

  }), 'Mp4');

};
