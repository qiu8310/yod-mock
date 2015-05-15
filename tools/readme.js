/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var path = require('path');
var cp = require('child_process');
var fs = require('fs-extra');

var rootDir = path.join(__dirname, '..');
var readme = fs.readFileSync(path.join(rootDir, 'README.md')).toString();

cp.execSync('node node_modules/.bin/def-doc src/mocks/*.js -o "API_TYPES.md"');
cp.execSync('node node_modules/.bin/def-doc src/modifiers/basic.js -o "API_MODIFIERS.md"');

readme = readme.replace(/<\!-- (\w+) START -->([\s\S]*)<\!-- \1 END -->/g, function(raw, key, mid) {

  var content = fs.readFileSync(path.join(rootDir, key + '.md')).toString();

  var category = [], last, cur;
  content.replace(/^## \[(.*?)\]/mg, function(raw, name, index) {
    name = name.split('.').shift().toUpperCase();
    cur = {name: name, start: index, end: 0, children: []};
    if (last) { last.end = index - 1; }
    category.push(cur);
    last = cur;
  });
  if (last) { last.end = Infinity; }


  content.replace(/^### \[(.*?)\]/mg, function(raw, names, index) {
    names = names.trim();
    var link = key + '.md#' + names.replace(/\s*&\s*/g, '--').toLowerCase();
    var i, c;
    for (i = 0; i < category.length; i++) {
      c = category[i];
      if (index > c.start && index < c.end) {
        c.children.push('[' + names + '](' + link + ')');
      }
    }
  });


  var result = [];
  category.forEach(function(c) {
    result.push('\n### ' + c.name + '\n');
    c.children.forEach(function(child) {
      result.push('* ' + child);
    });
  });


  return raw.replace(mid, '\n\n' + result.join('\n') + '\n\n');
});

fs.writeFileSync(path.join(rootDir, 'README.md'), readme);
