const test = require('tape');
const config = require('../');

const isObject = obj => typeof obj === 'object' && obj !== null;

test('Test basic properties of config', ts => {
  ts.ok(isObject(config.env));
  ts.ok(isObject(config.parserOptions));
  ts.ok(isObject(config.rules));
  ts.end();
});
