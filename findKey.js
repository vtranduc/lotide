const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} expected`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} expected`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    //console.log(key.stars);
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

const sol = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(sol);

assertEqual(sol, "noma");

module.exports = findKey;
