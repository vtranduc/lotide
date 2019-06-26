const letterPositions = function(str) {
  const results = {};
  
  for (const letter of str.split('')) {
    if (letter !== ' ') {
      results[letter] = [];
    }
  }
  
  for (const key in results) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === key) {
        results[key].push(i);
      }
    }
  }
  
  return results;
};

console.log(letterPositions('love live'));
