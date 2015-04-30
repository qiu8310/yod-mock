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

var rootDir = path.join(__dirname, '..');
var srcDir = path.join(rootDir, 'src');
var dataDir = path.join(srcDir, 'data');

var data = {};

fs.readdirSync(dataDir).forEach(function (name) {
  var key = name.split('.').shift();
  data[key] = require(path.join(dataDir, name));
});

var dataSource = 'yod.config(\'system\', ' + JSON.stringify(data) + ');';

var all = fs.readFileSync(srcDir + '/yod-mock.js').toString().replace('elegant.def', 'elegant.def/src/simple');

all = all.replace(/\/\*.*?build_delete_start.*\*\/([\s\S]*?)\/\*.*?build_delete_end.*\*\//, function(r, c) {
  var file, s, m, re = /\/(useful|modifiers|mocks)\/([\w-]+)/g, sub = [dataSource];

  while ((m = re.exec(c))) {
    file = path.join(srcDir, m[1], m[2] + '.js');
    s = compile(fs.readFileSync(file).toString().replace(/^(  |\t)/gm, ''));
    s = s.replace(/^[^\{]*\{|\}[^\}]*$/g, '');
    sub.push(s);
  }
  return sub.join('\n');
});

all += process.argv[2] === 'browser' ? 'if (typeof window !== \'undefined\') { window.yod = yod; }' : '';

fs.writeFileSync(path.join(rootDir, 'dist.js'), all);
