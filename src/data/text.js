
/**
 *
 * Unicode 字符集： http://en.wikibooks.org/wiki/Unicode/Character_reference/0000-0FFF
 *
 *
 * 00000000-0000007F的字符(0-127)，       用单个字节表示，二进制模板：0xxxxxxx
 * 00000080-000007FF的字符(128-32767)，   用两个字节表示，二进制模板：110xxxxx 10xxxxxx
 * 00000800-0000FFFF的字符(32768-65535)， 用三个字节表示，二进制模板：1110xxxx 10xxxxxx 10xxxxxx
 *
 * “汉”字的Unicode编码是6C49。6C49在0800-FFFF之间，所以肯定要用3字节模板了：1110xxxx 10xxxxxx 10xxxxxx
 * 将6C49写成二进制是：0110 110001 001001
 * 用这个比特流依次代替模板中的x，得到：11100110 10110001 10001001，即E6 B1 89
 *
 * escape('汉')    => "%u6C49"     Unicode
 * encodeURI('汉') => "%E6%B1%89"  UTF-8
 *
 * 中文 Unicode 编码范围：4e00 - 952f（19968 - 38191）
 * Reference: http://wenku.baidu.com/view/a776c3270722192e4536f667.html
 */
function word(self) {
  /**
   * @defaults {lang: en}
   *
   * @rule ([string lang = en]) -> string
   */

  var lang = (self.lang in this.langs) ? self.lang : self.$defaults.lang,
    texts = this.langs[lang];

  // 生成复杂的中文 String.fromCharCode(_.random(19968, 38191))
  return _.sample(texts);
}