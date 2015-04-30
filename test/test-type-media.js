/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var yod = require('../');
var assert = require('should');
var _ = yod._;


describe('yod type media', function () {
  context('@Picture & @Pic & @Image & @Img', function() {
    it('should work', function() {
      yod('@Picture.length').should.above(0);
      yod('@Pic.length').should.above(0);
      yod('@Image.length').should.above(0);
      yod('@Img.length').should.above(0);
    });
    it('should support category', function() {
      _.times(10, function() {
        yod.config('system.picture.user').should.containEql(yod('@Img(user)'));
        yod.config('system.picture.star').should.containEql(yod('@Img(star)'));
      });
    });
  });
  context('@Audio & @Mp3', function() {

    it('should work', function() {
      yod('@Audio.length').should.above(0);
      yod('@Mp3.length').should.above(0);
    });
    it('should support category', function() {
      _.times(10, function () {
        yod.config('system.audio.long').should.containEql(yod('@Mp3(long)'));
        yod.config('system.audio.voice').should.containEql(yod('@Mp3(voice)'));
      });
    });

  });
  context('@Video & @Mp4', function() {

    it('should work', function() {
      yod('@Video.length').should.above(0);
      yod('@Mp4.length').should.above(0);
    });
    it('should support category', function() {
      _.times(10, function () {
        yod.config('system.video.qiniu').should.containEql(yod('@Mp4(qiniu)'));
        yod.config('system.video.hotbody').should.containEql(yod('@Mp4(hotbody)'));
      });
    });

  });
});
