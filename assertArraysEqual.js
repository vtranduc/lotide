const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //return false;
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} expected`);
    return
  } else {
  /*
    for (let i = 0; i < arr1.length; i++) {
      if (eqArrays(arr1, arr2) === false) {
        //return false;
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} expected`);
        return
      }
    }
    //return true;
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} expected`);
  }
  */
  
    if (eqArrays(arr1, arr2)) {
      console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} expected`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} expected`);
    }
  }
};

module.exports = assertArraysEqual;
