/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  /*------------------------------------------------------------------
   ---------------  Picture & Pic & Image & Img  ---------------------
   ------------------------------------------------------------------*/

  yod.type('Picture & Pic & Image & Img', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */
    return _.sys('picture', {category: this.category});
  }));

  /*------------------------------------------------------------------
   ----------------------  Audio & Mp3  -------------------------
   ------------------------------------------------------------------*/


  yod.type('Audio & Mp3', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */

    return _.sys('audio', {category: this.category});
  }));

  /*------------------------------------------------------------------
   ----------------------  Video & Mp4  -------------------------
   ------------------------------------------------------------------*/


  yod.type('Video & Mp4', def(function() {
    /**
     * @rules ([String category = 'all']) -> String
     */

    return _.sys('video', {category: this.category});

  }));

};
