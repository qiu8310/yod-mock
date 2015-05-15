/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  yod.type('Color', def(function(format) {

    /**
     * Generate a random color value
     *
     * @name Color
     *
     * @rule ([string format]) -> string
     *
     * @example
     *
     * @Color();        // => some thing like: '#AB32F1'
     * @Color(short);   // => some thing like: '#345'
     * @Color(rgb);     // => some thing like: 'rgb(2, 10, 231)'
     */
    var len = 6;
    if (_.shortCut(format, 'short')) {
      len = 3;
    } else if (_.shortCut(format, 'rgb')) {
      return 'rgb(' + _.random(0, 255) + ', ' + _.random(0, 255) + ', ' + _.random(0, 255) + ')';
    }
    return '#' + _.sample('0123456789ABCDEF', len).join('');

  }));


  var tld = ['com', 'org', 'edu', 'gov', 'co.uk', 'net', 'io'];
  yod.type('Domain', def(function() {
    /**
     * Generate a random domain
     *
     * @name Domain
     *
     * @rule () -> string
     */
    return yod('@Word(3, 7)') + '.' + _.sample(tld);
  }));


  yod.type('Email', def(function() {
    /**
     * Generate a random email
     *
     * @name Email
     *
     * @rule () -> string
     */
    return yod('@First.lower') + (_.prob(0.5) ? yod('.@Last.lower') : '') + '@' + yod('@Domain');
  }));


  yod.type('Ip & IP', def(function() {
    /**
     * Generate a random ip
     *
     * @name Ip
     * @alias IP
     *
     * @rule () -> string
     */
    return yod('@Integer(1, 254).repeat(4, ".")');
  }));


  yod.type('Ipv6 & IPv6 & IPV6', def(function() {
    /**
     * Generate a random ipv6
     *
     * @name Ipv6
     * @alias IPv6
     * @alias IPV6
     *
     * @rule () -> string
     */
    return yod('@Char(hash).repeat(4, "").repeat(8, ":")');
  }));


  //yod.type('URL', def(function() {
  //
  //}), 'Url', 'Link');

};
