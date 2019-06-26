const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} expected`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} expected`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let count = 0;
  for (const item in itemsToCount) {
    count = 0;
    for (let i = 0; i < allItems.length; i++) {
      if (item === allItems[i]) {
        count++;
      }
    }
    itemsToCount[item] = count;
    
  }
  
  return itemsToCount;
  
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 0);
assertEqual(result1["Fang"], 2);
