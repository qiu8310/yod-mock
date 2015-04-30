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


describe('yod type user', function () {

  context('@Gender & @Sex', function() {

    it('should return english gender', function() {
      _.times(10, function() {
        yod.config('system.user.gender.en').should.containEql(yod('@Gender'));
        yod.config('system.user.gender.en').should.containEql(yod('@Sex'));
        yod.config('system.user.gender.en').should.containEql(yod('@Sex(en)'));
      });
    });

    it('should return other gender', function() {
      _.times(10, function() {
        yod.config('system.user.gender.zh').should.containEql(yod('@Sex(zh)'));
        yod.config('system.user.gender.short').should.containEql(yod('@Sex(short)'));
      });
    });

  });

  context('@Age', function() {
    it('should support different type age', function() {
      _.times(10, function() {
        yod('@Age').should.within(18, 100);
        yod('@Age(child)').should.within(1, 12);
        yod('@Age(teen)').should.within(13, 19);
        yod('@Age(adult)').should.within(18, 65);
        yod('@Age(senior)').should.within(65, 100);
        yod('@Age(all)').should.within(1, 100);
      });
    });
  });

  context('@Avatar', function() {
    it('should in config', function() {
      _.times(10, function() {
        yod.config('system.picture.user').should.containEql(yod('@Avatar'));
      });
    });
  });

  context('@First & @FirstName', function() {
    it('should in config', function() {
      _.times(10, function() {
        yod.config('system.user.first.male').should.containEql(yod('@First(male)'));
        yod.config('system.user.first.female').should.containEql(yod('@FirstName(female)'));
      });
    });
  });

  context('@Last & @LastName', function() {
    it('should in config', function() {
      _.times(10, function() {
        yod.config('system.user.last').should.containEql(yod('@Last'));
        yod.config('system.user.last').should.containEql(yod('@LastName'));
      });
    });
  });

  context('@UserName', function() {
    it('should be @First plus @Last', function() {
      _.times(10, function() {
        var un = yod('@UserName(male)').split(' ');
        yod.config('system.user.first.male').should.containEql(un[0]);
        yod.config('system.user.last').should.containEql(un[1]);
      });
    });

    it('should be @First @Last @Last', function() {
      _.times(10, function() {
        var un = yod('@UserName(female, true)').split(' ');
        yod.config('system.user.first.female').should.containEql(un[0]);
        yod.config('system.user.first.female').should.containEql(un[1]);
        yod.config('system.user.last').should.containEql(un[2]);
      });
    });
  });

  context('@Name & @ChineseName', function() {
    it('should be 2 - 4 words', function() {
      _.times(10, function() {
        yod('@Name.length').should.within(2, 4);
        yod('@ChineseName.length').should.within(2, 4);
      });
    });
  });

  context('@Nick & @NickName', function() {
    it('should in config', function() {
      _.times(10, function() {
        yod.config('system.user.nick').should.containEql(yod('@Nick'));
        yod.config('system.user.nick').should.containEql(yod('@NickName'));
      });
    });
  });

  context('@Comment', function() {
    it('should in config', function() {
      _.times(10, function() {
        yod.config('system.user.comment').should.containEql(yod('@Comment'));
      });
    });
  });

  context('@Telephone & Tel', function() {
    it('should be china telephone', function() {
      _.times(10, function() {
        yod('@Telephone').should.match(/^1[345678]\d{9}$/);
        yod('@Tel').should.match(/^1[345678]\d{9}$/);
      });
    });
  });
});
