/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} expected`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} expected`);
  }
};
*/

const assertEqual = require('./assertEqual');

const head = function(data) {
  if (data === []) {
    return undefined;
  } else {
    return data[0];
  }
};

module.exports = head;
