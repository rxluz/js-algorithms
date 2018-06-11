function factorial1(num, currentVal) {
  if (num === 1) {
    return currentVal;
  }

  return factorial(num - 1, (currentVal || num) * --num);
}

const factorial2 = num => (num === 1 ? num : num * factorial2(num - 1));

console.log(factorial2(4));
