/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

var path = require('path');
var _ = require('lodash');
var mo = require('moment');
var fs = require('fs-extra');

// global data
var G = {};

// save
var out = path.join(__dirname, '../dirty.json');
function save(data) { fs.writeJsonFileSync(out, data); }

// init
save(G);

var dirtyWork = require('./lls-replies')(_, G);

// watch
require('fisher').watch(__dirname).on('update', function(node) {
  if (/data\.json$/.test(node.filepath)) {
    try {
      dirtyWork(fs.readJsonSync(node.filepath));
      save(G);
      console.log('Updated At ' + mo().format('MMMM Do HH:mm:ss'));
    } catch (e) {
      console.log(e.message);
      console.log('Parse json error.');
    }
  }
});

