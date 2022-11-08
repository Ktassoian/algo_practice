const mostFrequentChar = (s) => {
  //   initialize hash map
  const letterCount = {};
  //   loop through letters
  for (let char of s) {
    //     if char is not in letterCount add it with val of 1
    //     if char is in letterCount, add 1 to value
    letterCount[char] = (letterCount[char] || 0) + 1;
  }
  //   set compare value
  let best = null;
  //   second loop over char
  for (let char of s) {
    // compare each char to best and set best to larger value
    if (best === null || letterCount[char] > letterCount[best]) {
      best = char;
    }
  }
  return best;
};

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
