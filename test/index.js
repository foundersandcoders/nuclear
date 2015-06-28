'use strict';

var test = require('tape');

var nuclear = require('../index.js');

if (!Function.prototype.bind) {
  Function.prototype.bind = require('function-bind');
}

test('Nuclear is an object', function t (assert) {

  assert.equal(typeof nuclear, 'object');
  assert.end();
});

test('If dom element is not present, throw error', function t (assert) {

  try {
    nuclear.app(null);
  } catch (e) {
    assert.equal(e.message, 'Element does not exist. Nuclear cannot be initialized.');
    assert.end();
  }
});
