function reverseArrayInPlace(arr) {
  arr.forEach((item, index) => {
    if (index >= Math.round(arr.length / 2)) {
      return;
    }

    const currentValue = arr[index];
    arr[index] = arr[arr.length - 1 - index];
    arr[arr.length - 1 - index] = currentValue;
  });

  return arr;
}

console.log(reverseArrayInPlace([0, 1, 2, 3, 4, 5, 6]));
