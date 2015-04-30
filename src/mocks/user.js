/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  /*------------------------------------------------------------------
            ---------------  Gender & Sex  ---------------------
   ------------------------------------------------------------------*/

  yod.type('Gender', def(function(cate) {
    return _.sys('user.gender', {category: cate || 'en'});
  }), 'Sex');

  /*------------------------------------------------------------------
              ---------------  Age  ---------------------
   ------------------------------------------------------------------*/

  yod.type('Age', def(function(type) {
    switch (type) {
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

  /*------------------------------------------------------------------
            ---------------  Avatar  ---------------------
   ------------------------------------------------------------------*/


  yod.type('Avatar', def(function() { return _.sys('picture.user'); }));


  /*------------------------------------------------------------------
          ---------------  First & FirstName  ---------------------
   ------------------------------------------------------------------*/

  yod.type('First', def(function (gender) {

    return _.sys('user.first', {category: gender || '*'});

  }), 'FirstName');


  /*------------------------------------------------------------------
          ---------------  Last & LastName  ---------------------
   ------------------------------------------------------------------*/

  yod.type('Last', def(function () {

    return _.sys('user.last');

  }), 'LastName');


  /*------------------------------------------------------------------
           ---------------   UserName  ---------------------
   ------------------------------------------------------------------*/

  yod.type('UserName', def(function() {

    /**
     * @defaults { gender: '*', middle: false }
     * @rules ([[String gender], [Boolean middle]]) -> String
     * @rules (Boolean middle, String gender) -> String
     */
    return yod('@First(%s)%s @Last', this.gender, this.middle ? ' @First(' + this.gender + ')' : '' );

  }));


  /*------------------------------------------------------------------
        ---------------  Name & ChineseName  ---------------------
   ------------------------------------------------------------------*/
  yod.type('Name', def(function() {

    var name = '';
    _.times(_.random(1, 2), function() { name += _.sys('user.family'); });
    _.times(_.random(1, 2), function() { name += _.sys('user.giveName'); });
    return name;

  }), 'ChineseName');

  /*------------------------------------------------------------------
          ---------------  Nick & NickName  ---------------------
   ------------------------------------------------------------------*/
  yod.type('Nick', def(function() {

    return _.sys('user.nick');

  }), 'NickName');


  /*------------------------------------------------------------------
          ---------------  Comment  ---------------------
   ------------------------------------------------------------------*/
  yod.type('Comment', def(function() {

    return _.sys('user.comment');

  }));


  /*------------------------------------------------------------------
        ---------------  Telephone & Tel  ---------------------
   ------------------------------------------------------------------*/
  yod.type('Telephone', def(function() {

    return '1' + _.sample([3, 4, 5, 7, 8]) + _.times(9, function() { return _.random(0, 9); }).join('');

  }), 'Tel');




};
