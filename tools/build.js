/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var path = require('path');
var fs = require('fs-extra');
var compile = require('elegant.def/src/compile');

var srcDir = path.join(__dirname, '..', 'src');
var dataDir = path.join(srcDir, 'data');

var data = {};

fs.readdirSync(dataDir).forEach(function (name) {
  var key = name.split('.').shift();
  data[key] = require(path.join(dataDir, name));
});

var dataSource = 'yod.config(\'system\', ' + JSON.stringify(data) + ');';

var all = fs.readFileSync(srcDir + '/yod-mock.js').toString().replace('elegant.def', 'elegant.def/src/simple');

all = all.replace(/\/\*.*?build_delete_start.*\*\/([\s\S]*?)\/\*.*?build_delete_end.*\*\//, function(r, c) {
  var file, s, m, re = /\/(modifiers|mocks)\/([\w-]+)/g, sub = [dataSource];

  while ((m = re.exec(c))) {
    file = path.join(srcDir, m[1], m[2] + '.js');
    s = compile(fs.readFileSync(file).toString());
    s = s.replace(/^[^\{]*\{|\}[^\}]*$/g, '');
    sub.push(s);
  }
  return sub.join('\n');
});


fs.writeFileSync(path.join(srcDir, 'b.js'), all);
