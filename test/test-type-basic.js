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


describe('yod type basic', function () {

  context('@Boolean & @Bool', function() {
    it('should has alias @Bool and return true or false', function() {
      _.times(10, function() {
        [true, false].should.containEql(yod('@Boolean'));
        [true, false].should.containEql(yod('@Bool'));
      });
    });

    it('should support set return true\'s percentage', function() {
      _.times(10, function() {
        yod('@Boolean("100%")').should.eql(true);
        yod('@Boolean("0%")').should.eql(false);
        [true, false].should.containEql(yod('@Boolean(50%)'));
      })
    });

    it('should support set return true\'s probability', function() {
      _.times(10, function() {
        yod('@Boolean(1)').should.eql(true);
        yod('@Boolean(0)').should.eql(false);
        [true, false].should.containEql(yod('@Boolean(50)'));
        [true, false].should.containEql(yod('@Boolean(0.5)'));
      });
    });
  });

  context('@Double & @Float', function() {
    it('should has alias @Float and return number', function() {
      yod('@Float').should.instanceof(Number);
      yod('@Double').should.instanceof(Number);
    });

    it('should between 0 and 1', function() {
      _.times(10, function() {
        yod('@Float').should.within(0, 1);
      });
    });

    it('should return fixed floating length number', function() {
      _.times(40, function() {
        yod('`"@Float("5")".length`').should.below(8);
        yod('`"@Float("1-2")".length`').should.below(5);
      })
    });

    it('should support specify max float number', function() {
      _.times(10, function() {
        yod('@Float(0.5)').should.below(0.51);
      });
    });

    it('should support specify min and max float number', function() {
      _.times(10, function() {
        yod('@Float(0.1, 0.5)').should.within(0.1, 0.5);
        yod('@Float(0, 10)').should.within(0, 10);
        yod('@Float(20, 30)').should.within(20, 30);
      });
    });

    it('should support invalid format', function() {
      yod('@Float(1-a)').should.instanceof(Number);
      yod('@Float(aa-2)').should.instanceof(Number);
      yod('@Float(aa-bb)').should.instanceof(Number);
    });

  });

  context('@Integer & @Int', function() {
    function isInt(w) { return (typeof w === 'number') && String(w).indexOf('.') === -1; }

    it('should has alias @Int and return integer', function() {
      _.times(10, function() {
        isInt(yod('@Integer')).should.eql(true);
        isInt(yod('@Int')).should.eql(true);
      });
    });

    it('should return integer less than a number', function() {
      _.times(10, function() {
        yod('@Int(10)').should.below(11);
        yod('@Int(0)').should.eql(0);
      });
    });

    it('should return integer between min and max', function() {
      _.times(10, function() {
        yod('@Int(1, 2)').should.within(1, 2);
        yod('@Int(-1, 2)').should.within(-1, 2);
        yod('@Int(-1, 10)').should.within(-1, 10);
        yod('@Int(1, 1)').should.eql(1);
      });
    });
  });

  context('@Number', function() {
    it('should be a number', function() {
      _.times(10, function() {
        (typeof yod('@Number')).should.eql('number');
      });
    });
  });

  context('@Character & @Char', function() {
    it('should use pool', function() {
      _.times(10, function() {
        yod('@Character(a)').should.eql('a');
        yod('@Char(a)').should.eql('a');
        'hash'.should.containEql(yod('@Char("hash", true)'));
        'abc'.should.containEql(yod('@Char("abc", true)'));
      });
    });

    it('should use system configs', function() {
      _.times(10, function() {
        'aeiou'.should.containEql(yod('@Char(vowel)'));
        '0123456789abcdef'.should.containEql(yod('@Char(hash)'));
      });
    });
  });

  context('@String & @Str', function() {
    it('should use length', function() {
      _.times(10, function() {
        yod('@String(10)').should.have.length(10);
        yod('@Str(1)').should.have.length(1);
        yod('@String(0)').should.have.length(0);

        yod('@String(a, 3)').should.eql('aaa');
      });
    });

    it('should use min max', function() {
      _.times(10, function() {
        yod('@Str(1, 4).length').should.within(1, 4);
        yod('@Str(2, 10).length').should.within(2, 10);
      });
    });
  });

  context('@Date', function() {
    var now, yearMS;
    before(function() {
      now = Date.now();
      yearMS = 3600000 * 24 * 365;
    });

    it('should return timestamp', function() {
      yod('@Date').should.be.instanceof(Number);
      yod('`String(@Date)`').should.have.length(10);
    });

    it('should return ten year range', function() {
      _.times(10, function() {
        var ten = yearMS * 10;
        yod('@Date').should.within((now - ten)/1000, now);
        yod('@Date(0)').should.within((now - ten)/1000, (now + ten)/1000);
      });
    });

    it('should support relative time', function() {
      _.times(10, function() {
        var t1 = 1410715640, t2 = 100000;
        yod('@Date(jsTimestamp, "%s", "%s")', t1, t2).should.within((t1 - 20) * 1000, now + yearMS + t2 * 1010);
        yod('@Date(jsTimestamp, "%s", "%s")', t1, 'abc').should.within((t1 - 20) * 1000, now + yearMS + 10000);
      });
    });

    it('should support specify from string', function() {
      var m = yod.moment;
      _.times(10, function() {
        var s = '2014-01-01 00:00:00', t = (new Date(s)).getTime();
        yod('@Date(jsTimestamp, "%s", "%s")', s, '...').should.within(t, now + yearMS + 10000);
      });
    });

    it('should return last one year timestamp', function() {
      _.times(10, function() {
        var last = now - 3600000 * 24 * 365 - 2;
        yod('@Date(jsTimestamp, -1)').should.within(last, now);
      });
    });

    it('should support specify format', function() {
      yod('`String(@Date(jsTimestamp))`').should.match(/^\d{13}$/);
      yod('`String(@Date(YYYY))`').should.match(/^\d{4}$/);
    });

    it('should return future one hour', function () {
      _.times(10, function() {
        var future = now + 3600000 + 2;
        (yod('@Date(1, 3600)') * 1000).should.within(now, future);
      });
    });

    it('should return future one hour to future two hour', function() {
      _.times(10, function() {
        var fOne = now + 3600000 - 10000, fTwo = fOne + 3600000 + 20000;
        (yod('@Date("3600", "7200")') * 1000).should.within(fOne, fTwo);
      });
    });
  });

  context('@Range', function() {
    it('should use lodash _.range', function() {
      assert.deepEqual(yod('@Range'), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      assert.deepEqual(yod('@Range(1)'), [0]);
      assert.deepEqual(yod('@Range(1, 3)'), [1, 2]);
      assert.deepEqual(yod('@Range(1, 3, 2)'), [1]);
    });
  });

  context('@Sequence & @Seq & @Id', function() {
    it('should inc', function() {
      yod('@Sequence').should.eql(1);
      yod('@Seq').should.eql(2);
      yod('@Id').should.eql(3);
    });

    it('should restart', function() {
      yod('@Seq');
      yod('@Seq').should.not.eql(1);
      yod('@Seq(ab)').should.eql(1);
      yod('@Seq(ab)').should.eql(2);
      yod('@Seq(ab)').should.eql(3);

      yod('@Seq(ac)').should.eql(1);
      yod('@Seq(ad)').should.eql(1);

    });
  });

  context('@UUID & @Uuid & @GUID & @Guid', function() {
    it('should have length 36', function() {
      yod('@UUID').should.have.length(36);
      yod('@Uuid').should.have.length(36);
      yod('@GUID').should.have.length(36);
      yod('@Guid').should.have.length(36);
    });
  });

  context('@Objectid & @Oid', function() {
    it('should have length 24', function() {
      yod('@Objectid').should.have.length(24);
      yod('@Oid').should.have.length(24);
    });
  });

  context('@Md5 & @MD5', function() {
    it('should have length 32', function() {
      yod('@MD5').should.have.length(32);
      yod('@Md5').should.have.length(32);
    });
  });
});
