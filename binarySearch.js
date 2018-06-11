function binarySearch(numArray, key) {
  const middleIdx = Math.floor(numArray.length / 2);
  const middleElem = numArray[middleIdx];

  if (middleElem === key) return true;

  if (numArray.length === 1) return numArray[0] !== key ? false : true;

  return middleElem > key
    ? binarySearch(numArray.splice(0, middleIdx), key)
    : binarySearch(numArray.splice(middleIdx, numArray.length), key);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));
