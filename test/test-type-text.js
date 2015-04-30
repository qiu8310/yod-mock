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


describe('yod type text', function () {
  context('@CW', function() {
    it('should work', function() {
      yod('@CW').length.should.eql(1);
      yod('@CW').length.should.eql(1);
    });
  });

  context('@CS', function() {
    it('should work', function() {
      yod('@CS').slice(-1).should.eql('。');
      yod('@CS').slice(-1).should.eql('。');
    });
  });

  context('@CP', function() {
    it('should work', function() {
      function num(a) { return _.filter(a, function(t) { return t === '。'; }).length; }

      _.times(10, function() {
        num(yod('@CP')).should.within(3, 7);
        num(yod('@CP(1, 2)')).should.within(1, 2);
        num(yod('@CP(4)')).should.eql(4);
        num(yod('@CP(10)')).should.eql(10);
      });
    });
  });

  context('@Word & @EW', function() {
    it('should work', function() {
      _.times(10, function() {
        yod('@EW.length').should.within(3, 10);
        yod('@Word.length').should.within(3, 10);
      });
    });

    it('should support length', function() {
      _.times(10, function() {
        yod('@EW(10).length').should.eql(10);
        yod('@EW(1).length').should.eql(1);
        yod('@EW(0).length').should.eql(0);
      });
    });

    it('should support min max length', function() {
      _.times(10, function() {
        yod('@EW(10, 20).length').should.within(10, 20);
        yod('@EW(1, 2).length').should.within(1, 2);
      });
    });
  });

  context('@Sentence & @ES', function() {
    it('should work', function() {
      _.times(10, function() {
        yod('@ES').slice(-1).should.eql('.');
        yod('@ES(5)').slice(-1).should.eql('.');
        yod('@Sentence').slice(-1).should.eql('.');
      });
    });
  });

  context('@Paragraph & @EP', function() {
    function num(a) { return _.filter(a, function(t) { return t === '.'; }).length; }
    it('should work', function() {
      _.times(10, function() {
        num(yod('@EP')).should.within(3, 7);
        num(yod('@EP(5)')).should.eql(5);
        num(yod('@Paragraph(1, 5)')).should.within(1, 5);
      });
    });
  });

  context('@Good', function() {
    it('should work', function() {
      yod('@Config.system.word.good').should.containEql(yod('@Good'));
      yod('@Config.system.word.good').should.containEql(yod('@Good'));
      yod('@Config.system.word.good').should.containEql(yod('@Good'));
    });
  });

  context('@Face', function() {
    it('should work', function() {
      yod('@Config.system.word.face').should.containEql(yod('@Face'));
      yod('@Config.system.word.face').should.containEql(yod('@Face'));
      yod('@Config.system.word.face').should.containEql(yod('@Face'));
    });
  });
});
