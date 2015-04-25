/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _, helper) {

  yod.type('Color', def(function(format) {

    var len = 6;
    if (helper.shortCut(format, 'short')) {
      len = 3;
    } else if (helper.shortCut(format, 'rgb')) {
      return helper.f('rgb(%d, %d, %d)', _.random(0, 255), _.random(0, 255), _.random(0, 255));
    }
    return '#' + _.sample('0123456789ABCDEF', len).join('');

  }));


  var tld = ['com', 'org', 'edu', 'gov', 'co.uk', 'net', 'io'];
  yod.type('Domain', def(function() {
    return yod('@Word(3, 7)') + '.' + _.sample(tld);
  }));

  yod.type('Email', def(function() {
    return yod('@First.lower') + (helper.prob(0.5) ? yod('.@Last.lower') : '') + '@' + yod('@Domain');
  }));


  yod.type('Ip', def(function() {
    return yod('@Integer(10, 254).repeat(4, ".")');
  }), 'IP');

  yod.type('Ipv6', def(function() {
    return yod('@Char(hash).repeat(4, "").repeat(8, ":")');
  }), 'IPv6', 'IPV6');


  //yod.type('URL', def(function() {
  //
  //}), 'Url', 'Link');

};
