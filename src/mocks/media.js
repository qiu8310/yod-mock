/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {


  yod.type('Image & Img & Picture & Pic', def(function() {
    /**
     *
     * Generate a random image url
     *
     * _Using config `system.picture`_
     *
     * @name Image
     * @alias Img
     * @alias Picture
     * @alias Pic
     * @rule ([String category = 'all']) -> String
     */
    return _.sys('picture', {category: this.category});
  }));




  yod.type('Audio & Mp3 & MP3', def(function() {
    /**
     *
     * Generate a random audio url
     *
     * _Using config `system.audio`_
     *
     * @name Audio
     * @alias Mp3
     * @alias MP3
     *
     * @rule ([String category = 'all']) -> String
     */

    return _.sys('audio', {category: this.category});
  }));




  yod.type('Video & Mp4 & MP4', def(function() {
    /**
     *
     * Generate a random video url
     *
     * _Using config `system.video`_
     *
     * @name Video
     * @alias Mp4
     * @alias MP4
     *
     * @rule ([String category = 'all']) -> String
     */

    return _.sys('video', {category: this.category});

  }));

};
