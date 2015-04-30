/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

module.exports = function(yod, def, _) {

  yod.type('CW', def(function() {
    return _.sys('word.cn');
  }));

  yod.type('CS', def(function() {
    var all = yod.config('system.word.cn');
    var len = all.length - 20, res = [];
    _.times(_.random(1, 4), function() {
      res.push(all.substr(_.random(0, len), _.random(8, 20)));
    });
    return res.join('，') + '。';
  }));

  yod.type('CP', def(function() {
    /**
     * @rules (Integer length) -> String
     * @rules ([ Integer min = 3, Integer max = 7 ]) -> String
     */
    return yod('@CS.repeat(%d, " ")', this.length || _.random(this.min, this.max));
  }));


  yod.type('Word', def(function() {
    /**
     * @rules (Integer length) -> String
     * @rules ([ Integer min = 3, Integer max = 10 ]) -> String
     */
    var length = this.$has('length') ? this.length : _.random(this.min, this.max),
      consonants = 'bcdfghjklmnprstvwz', // consonants except hard to speak ones
      vowels = 'aeiou', // vowels
      all = consonants + vowels, // all
      text = '',
      chr;

    // I'm sure there's a more elegant way to do this, but this works
    // decently well.
    for (var i = 0; i < length; i++) {
      if (i === 0) {
        // First character can be anything
        chr = _.sample(all);
      } else if (consonants.indexOf(chr) === -1) {
        // Last character was a vowel, now we want a consonant
        chr = _.sample(consonants);
      } else {
        // Last character was a consonant, now we want a vowel
        chr = _.sample(vowels);
      }
      text += chr;
    }

    return text;
  }), 'EW');

  // Could get smarter about this than generating random words and
  // chaining them together. Such as: http://vq.io/1a5ceOh
  yod.type('Sentence', def(function() {
    /**
     * @rules (Integer length) -> String
     * @rules ([ Integer min = 12, Integer max = 18 ]) -> String
     */

    return yod('@Word.repeat(%d, " ").cap.', this.$has('length') ? this.length : _.random(this.min, this.max));
  }), 'ES');


  yod.type('Paragraph', def(function() {
    /**
     * @rules (Integer length) -> String
     * @rules ([ Integer min = 3, Integer max = 7 ]) -> String
     */

    return yod('@Sentence.repeat(%d, " ")', this.$has('length') ? this.length : _.random(this.min, this.max));
  }), 'EP');

  yod.type('Good', def(function() {
    return _.sys('word.good');
  }));

  yod.type('Face', def(function() {
    return _.sys('word.face');
  }));

};
