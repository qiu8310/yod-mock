#!/usr/bin/env node
'use strict';
var cp = require('copy-paste');

var yod = require('./src/yod-mock');

var copy, str;

yod._.each(process.argv.slice(2), function(arg) {
  if (arg === '-c') {
    copy = true;
  } else if (arg[0] !== '-') {
    str = arg;
  }
});


if (!str) {
  console.log('\r\n  Usage:');
  console.log('\r\n  yod [-c] generator\r\n\r\n');
} else {
  str = str.replace(/^@/, '');

  try {
    str = yod('@' + yod._.capitalize(str));

    console.log();
    console.log(str);
    console.log();

    if (copy) { cp.copy(str); }
  } catch (e) {
    console.log('\nError: ' + e.message + '\n');
  }
}