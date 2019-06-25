//const [assertArraysEqual, without] = require("./without.js");

const flatten = function(source) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    output = output.concat(source[i]);
  }
  return output;
};

//console.log(flatten([[1,100], 2, [3, 4], 5, [6,0],99])) // => [1, 2, 3, 4, 5, 6]
