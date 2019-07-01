const assertEqual = require('../assertEqual');
const tail = require('../tail');


// TEST CODE
const result = tail([1,2,3,4]);
assertEqual(result.length, 3);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

// Checks for modification of array
const sameArrCheck = [1,2,3,4,5];
tail(sameArrCheck);
assertEqual(sameArrCheck.length, 5);