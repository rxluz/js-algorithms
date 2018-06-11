function twoSum1(numArray, sum) {
  var pairs = [];
  var hashtable = [];
  numArray.forEach((currNum, index) => {
    const counterpart = sum - currNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashtable.push(currNum);
  });

  return pairs;
}

function twoSum2(numArray, sum) {
  const pairsList = [];
  numArray.forEach((num, index) => {
    const counterpart = sum - num;
    const searchCounterpart = numArray.indexOf(counterpart);

    if (searchCounterpart !== -1 && searchCounterpart !== index) {
      pairsList.push([num, counterpart]);
    }
  });

  return pairsList;
}

console.log(twoSum2([1, 2, 3, 4, 5], 3));
