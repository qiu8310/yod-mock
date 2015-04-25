'use strict';


/*
  ASSERT:
    ok(value, [message]) - Tests if value is a true value.
    equal(actual, expected, [message]) - Tests shallow, coercive equality with the equal comparison operator ( == ).
    notEqual(actual, expected, [message]) - Tests shallow, coercive non-equality with the not equal comparison operator ( != ).
    deepEqual(actual, expected, [message]) - Tests for deep equality.
    notDeepEqual(actual, expected, [message]) - Tests for any deep inequality.
    strictEqual(actual, expected, [message]) - Tests strict equality, as determined by the strict equality operator ( === )
    notStrictEqual(actual, expected, [message]) - Tests strict non-equality, as determined by the strict not equal operator ( !== )
    throws(block, [error], [message]) - Expects block to throw an error.
    doesNotThrow(block, [error], [message]) - Expects block not to throw an error.
    ifError(value) - Tests if value is not a false value, throws if it is a true value. Useful when testing the first argument, error in callbacks.

  SHOULD.JS:
    http://shouldjs.github.io/

  Some test frameworks:
    sinon:  function spy
    nock: mock http request
    supertest: test http server
    rewire: modify the behaviour of a module such that you can easily inject mocks and manipulate private variables

  More on http://www.clock.co.uk/blog/tools-for-unit-testing-and-quality-assurance-in-node-js
*/

var yodMock = require('../');
var assert = require('should');

describe('yodMock', function () {

  it('should be awesome', function () {
    yodMock().should.equal('awesome');
  });

});
