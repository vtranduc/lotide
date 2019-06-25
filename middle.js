const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //return false;
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} expected`);
    return;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        //return false;
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} expected`);
        return;
      }
    }
    //return true;
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} expected`);
  }
};

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

const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else {
    if (arr.length % 2 === 1) {
      return arr[(arr.length - 1) / 2];
    } else if (arr.length % 2 === 0) {
      const firstIndex = arr.length / 2 - 1;
      return arr.slice(firstIndex, firstIndex + 2);
    }
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
