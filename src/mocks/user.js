/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {


  yod.type('Gender & Sex', def(function() {
    /**
     *
     * Generate a random gender string
     *
     * - `category` can be `'zh'`, `'en'` and `'short'`
     *
     * _Using config `system.user.gender`_
     *
     * @name Gender
     * @alias Sex
     * @rule ([string category = 'en']) -> string
     */
    return _.sys('user.gender', {category: this.category});
  }));


  yod.type('Age', def(function() {
    /**
     *
     * Generate a random integer age
     *
     * - `type` can be `'child'`, `'teen'`, `'adult'`, `'senior'`, `'all'`
     *
     * @name Age
     * @rule ([string type]) -> integer
     */
    switch (this.$get('type')) {
      case 'child':
        return _.random(1, 12);
      case 'teen':
        return _.random(13, 19);
      case 'adult':
        return _.random(18, 65);
      case 'senior':
        return _.random(65, 100);
      case 'all':
        return _.random(1, 100);
      default:
        return _.random(18, 100);
    }
  }));



  yod.type('Avatar', def(function() {
    /**
     * Generate a random avatar url
     *
     * @name Avatar
     * @rule () -> string
     */
    return _.sys('picture.user');
  }));


  yod.type('First & FirstName', def(function () {

    /**
     * Generate a random first name
     *
     * - `gender` can be `'male'` or `'female'`
     *
     * _Using config `system.user.first`_
     *
     * @name First
     * @alias FirstName
     * @rule ([string gender = all]) -> string
     */

    return _.sys('user.first', {category: this.gender});

  }));



  yod.type('Last & LastName', def(function () {
    /**
     *
     * Generate a random last name
     *
     * _Using config `system.user.last`_
     *
     * @name Last
     * @alias LastName
     *
     * @rule () -> string
     */

    return _.sys('user.last');

  }));


  yod.type('UserName & Username', def(function() {

    /**
     * Generate a random username
     *
     * @name UserName
     * @alias Username
     *
     * @defaults { gender: '*', middle: false }
     * @rule ([[String gender], [Boolean middle]]) -> String
     * @rule (Boolean middle, String gender) -> String
     */
    return yod('@First(%s)%s @Last', this.gender, this.middle ? ' @First(' + this.gender + ')' : '' );

  }));


  yod.type('Name & ChineseName', def(function() {

    /**
     * Generate a random chinese name
     *
     * @name Name
     * @alias ChineseName
     * @rule () -> string
     */
    var name = '';
    _.times(_.random(1, 2), function() { name += _.sys('user.family'); });
    _.times(_.random(1, 2), function() { name += _.sys('user.giveName'); });
    return name;

  }));


  yod.type('Nick & NickName & Nickname', def(function() {
    /**
     * Generate a random nickname
     *
     * _Using config `system.user.nick`_
     *
     * @name Nick
     * @alias NickName
     * @alias Nickname
     * @rule () -> string
     */
    return _.sys('user.nick');

  }));


  yod.type('Comment', def(function() {

    /**
     * Generate a random comment
     *
     * _Using config `system.user.comment`_
     *
     * @name Comment
     *
     * @rule () -> string
     *
     */
    return _.sys('user.comment');

  }));


  yod.type('Telephone & Tel', def(function() {

    /**
     *
     * Generate a random telephone
     *
     * - `country` can be `'fr'`, `'uk'`, `'us'`, default is `'zh'`
     *
     * @name Telephone
     * @alias Tel
     *
     * @rule ([string country = zh, ] [bool format = false]) -> string
     */

    var tel, numPick,
      ukNum = function (parts) {
        var section = [];
        //fills the section part of the phone number with random numbers.
        parts.sections.forEach(function(n) {
          section.push(yod('@Char(number).repeat(%d, "")', n));
        });
        return parts.area + section.join(' ');
      };

    switch (this.country) {
      case 'fr':
        numPick = _.sample(['06', '07']) + yod('@Char(number).repeat(8,"")');
        tel = this.format ? numPick.match(/../g).join(' ') : numPick;
        break;

      case 'uk':

        numPick = _.sample([
          { area: '07' + _.sample(['4','5','7','8','9']), sections: [2,6] },
          { area: '07624 ', sections: [6] }
        ]);
        tel = this.format ? ukNum(numPick) : ukNum(numPick).replace(' ', '');
        break;

      case 'us':
        var areacode = yod('(@Int(2, 9)@Int(0, 9)@Int(0, 8))');
        var exchange = yod('@Int(2, 9)@Int(0, 9)@Int(0, 9)');
        var subscriber = yod('@Int(1000, 9999)');

        tel = this.format ? areacode + ' ' + exchange + '-' + subscriber : areacode + exchange + subscriber;
        break;

      default:
        tel = '1' + _.sample([3, 4, 5, 7, 8]) + _.random(0, 9) + '-' + yod('@Int(1000, 9999)-@Int(1000, 9999)');
        tel =  this.format ? tel : tel.replace(/-/g, '');
    }

    return tel;

  }));

};
