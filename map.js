const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //return false;
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} expected`);
    return
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        //return false;
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} expected`);
        return
      }
    }
    //return true;
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} expected`);
  }
};

/*
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//const results1 = map(words, word => word[0]);
//console.log(results1);


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word.length), [6,7,2,5,3]);
