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

  function _uriComponent(arg) { return encodeURIComponent(arg).replace(/%20/g, '+'); }
  function _holder(base, self) {
    var size = self.$get('size', '640x480'),
      colors = self.$get('colors', yod('@Color/${@Color}.png')).replace(/#/g, '').toLowerCase(),
      text = _uriComponent(self.$get('text', yod('@Good')));

    return base + size + '/' + colors + '&text=' + text;
  }



  yod.type('Dummy', def(function Dummy(self) {
    /**
     *
     * Using [http://dummyimage.com](http://dummyimage.com) to generate a random image
     *
     * @rule ([string size, [string text, [string colors]]]) -> string
     * @rule ([int size, [string text, [string colors]]]) -> string
     *
     */

    return _holder('http://dummyimage.com/', self);
  }));

  yod.type('Placehold & PlaceHold', def(function Placehold(self) {
    /**
     *
     * Using [http://placehold.it](http://placehold.it) to generate a random image
     *
     * @alias PlaceHold
     *
     * @rule ([string size, [string text, [string colors]]]) -> string
     * @rule ([int size, [string text, [string colors]]]) -> string
     *
     */

    return _holder('http://placehold.it/', self);

  }));

  yod.type('Placeimg & PlaceImg', def(function Placeimg() {
    /**
     *
     * Using [http://placeimg.com](http://placeimg.com) to generate a random image
     *
     * @defaults {categories: [animals, arch, nature, people, tech], hues: [sepia, grayscale]}
     * @alias PlaceImg
     * @rule ([string size, [string category, [string hue]]]) -> string
     * @rule ([int size, [string category, [string hue]]]) -> string
     */
    var size = this.$get('size', '640x480');
    if (!/^\d+x\d+$/.test(size)) {
      size = size + 'x' + size;
    }

    var cate = _.shortCut(this.category, this.categories) || _.sample(this.categories);
    var hue = _.shortCut(this.hue, this.hues);

    return 'http://placeimg.com/' + size.replace('x', '/') + '/' + cate + (hue ? '/' + hue : '');
  }));


  yod.type('Unsplash & UnSplash & Splash & U', def(function () {
    /**
     *
     * Using [unsplash](https://unsplash.it/) to generate a random image
     *
     * Support arguments examples:
     *
     *  - 640
     *  - 640x320
     *  - 640/320
     *  - gray
     *  - blur
     *  - west
     *  - south
     *  - east
     *  - north
     *  - center
     *
     * @rule ([* ...args]) -> string
     *
     */
    var args = this.$get('args', []);
    var size = '1920/800', grayscale = false, blur = false, gravity = false;

    args.forEach(function (arg) {
      arg = arg.toString();
      if (/(\d+)(?:[\x\/](\d+))?/.test(arg)) {
        size = RegExp.$1 + '/' + (RegExp.$2 || RegExp.$1);
      } else if ('grayscale'.indexOf(arg) === 0) {
        grayscale = true;
      } else if ('blur'.indexOf(arg) === 0) {
        blur = true;
      } else {
        ['north', 'east', 'south', 'west', 'center'].some(function (k) {
          if (k.indexOf(arg) === 0) {
            gravity = k;
            return true;
          }
        });
      }
    });

    return 'https://unsplash.it/' +
      (grayscale ? 'g/' : '') +
      size +
      '/?random' +
      (blur ? '&blur' : '') +
      (gravity ? '&gravity=' + gravity : '');


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
