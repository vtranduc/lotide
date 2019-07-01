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

const without = function(source, itemsToRemove) {
  let output = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = source.length - 1; j > -1; j--) {
      if (itemsToRemove[i] === source[j]) {
        output = output.slice(0, j).concat(output.slice(j+1));
      }
    }
  }
  return output;
};

module.exports = without;


//console.log([9, 1] + [1]);
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
