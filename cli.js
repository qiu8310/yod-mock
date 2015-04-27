#!/usr/bin/env node
'use strict';
var cp = require('copy-paste');

var yod = require('./src/yod-mock');

var copy, caller, params, args = process.argv.slice(2);

if (args.indexOf('-c') >= 0) {
  copy = true;
  args.splice(args.indexOf('-c'), 1);
}

if (!args.length) {
  console.log('\r\n  Usage:');
  console.log('\r\n  yod [-c] generator\r\n\r\n');
} else {

  caller = args.shift();
  params = false;
  args.forEach(function(arg) {
    if (arg[0] !== '.') {
      if (!params) {
        params = [];
      }
      params.push(arg);
    } else {
      if (params) {
        caller += '(' + params.join(', ') + ')';
      }
      caller += arg;
      params = false;
    }
  });

  if (params) {
    caller += '(' + params.join(', ') + ')';
  }

  caller = caller.replace(/^@/, '');

  try {
    caller = yod('@' + yod._.capitalize(caller));

    console.log();
    console.log(caller);
    console.log();

    if (copy) { cp.copy(caller); }
  } catch (e) {
    console.log('\nError: ' + e.message + '\n');
  }
}