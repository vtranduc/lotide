const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} expected`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} expected`);
  }
};


const countLetters = function(str) {
  let output = {};
  for (const letter of str.split('')) {
    output[letter] = 0;
  }
  for (const key in output) {
    for (const letter of str.split('')) {
      if (key === letter) {
        output[key]++;
      }
    }
  }
  return output;
};
