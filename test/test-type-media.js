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

  context('@Dummy & @Placehold & @PlaceHold', function() {
    it('should work', function() {
      yod('@Dummy').should.be.a.String;
      yod('@Placehold').should.be.a.String;
      yod('@PlaceHold').should.be.a.String;
    });

    it('should support arguments', function() {
      yod('@Placehold("300")').should.be.a.String;
      yod('@Placehold("300", haha)').should.be.a.String;
      yod('@Placehold("300", haha, "ff00ff")').should.be.a.String;
      yod('@Placehold("300", haha, "ff00ff/00ff00")').should.be.a.String;
    });
  });

  context('@Placeimg & @PlaceImg', function() {
    it('should work', function() {
      yod('@Placeimg').should.be.a.String;
      yod('@PlaceImg').should.be.a.String;
      yod('@PlaceImg(300)').should.be.a.String;
      yod('@PlaceImg(300, t)').should.be.a.String;
      yod('@PlaceImg(300, pe, gray)').should.be.a.String;
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
